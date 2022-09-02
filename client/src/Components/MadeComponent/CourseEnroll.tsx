import React from "react";
import CustomButton from "../Customs/CustomButton";

interface CourseEnrollProps {
	book: string;
	name: string;
	title: string;
	handleEnroll: () => void;
	loader: Boolean;
}

const CourseEnroll: React.FC<CourseEnrollProps> = ({
	book,
	title,
	name,
	handleEnroll,
	loader,
}) => {
	return (
		<div className="lg:col-span-3 cursor-pointer py-2 hover:shadow-md rounded-md shadow ">
			<img src={book} alt="book" className="w-full h-64" />
			<div className="px-3">
				<div className="h-44">
					<h2 className="text-center py-5 font-semibold text-lg">
						{name}
					</h2>
					<p className="pb-2 ">{title}</p>
				</div>
				<CustomButton
					onclick={() => handleEnroll()}
					children={loader ? "Enrolling, Please wait" : "Enroll now"}
				/>
			</div>
		</div>
	);
};

export default CourseEnroll;
