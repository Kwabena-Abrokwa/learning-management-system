import React from "react";
import CustomButton from "../Customs/CustomButton";

interface BookCardProps {
	book: string;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
	return (
		<div className="lg:col-span-3 cursor-pointer py-2 hover:shadow-md rounded-md shadow ">
			<img src={book} alt="book" className="w-full h-60" />
			<div className="px-3">
				<h2 className="text-center py-5 font-semibold text-lg">
					JavaScript Master
				</h2>
				<p className="pb-2 ">
					This is helps you with JavaScript concepts. Continue reading
					content from this book and master Javascript.
				</p>
				<CustomButton children={"Continue lessons"} />
			</div>
		</div>
	);
};

export default BookCard;
