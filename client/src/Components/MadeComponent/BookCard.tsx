import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../Customs/CustomButton";

interface BookCardProps {
	book: string;
	name: string;
	title: string;
	course_id: string;
}

const BookCard: React.FC<BookCardProps> = ({
	book,
	name,
	title,
	course_id,
}) => {
	return (
		<div className="lg:col-span-3 cursor-pointer py-2 hover:shadow-md rounded-md shadow ">
			<img
				src={require(`../../Assets/${book}`)}
				alt="book"
				className="w-full h-60"
			/>
			<div className="px-3">
				<div className="h-44">
					<h2 className="text-center py-5 font-semibold text-lg">
						{name}
					</h2>
					<p className="pb-2 ">{title}</p>
				</div>
				<Link to={`../lessons/${course_id}`}>
					<CustomButton children={"Start lessons"} />
				</Link>
			</div>
		</div>
	);
};

export default BookCard;
