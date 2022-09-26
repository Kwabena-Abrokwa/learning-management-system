import axios from "axios";
import React, { useState } from "react";
import DashboardLayout from "../../Components/LayoutComponent/DashboardLayout";
import CourseEnroll from "../../Components/MadeComponent/CourseEnroll";
import { useNavigate } from "react-router";

const data = [
	{
		course_id: "1001",
		name: "JavaScript Mastery",
		title: "This is helps you with JavaScript concepts. Continue reading content from this book and master Javascript",
		book: require("../../Assets/bookimg/book1.jpeg"),
		imag: "book1.jpeg",
		level: "Beginner",
	},
	{
		course_id: "1002",
		name: "Learn Digital Marketing",
		title: "This is helps you with Digital Marketing concepts. Enroll to course now",
		book: require("../../Assets/bookimg/book2.jpg"),
		imag: "book2.jpg",
		level: "Beginner",
	},
	{
		course_id: "1003",
		name: "How to survive",
		title: "This is helps you with JavaScript concepts. Continue reading content from this book and master Javascript",
		book: require("../../Assets/bookimg/book3.jpeg"),
		imag: "book3.jpeg",
		level: "Beginner",
	},
	{
		course_id: "1004",
		name: "Your best life",
		title: "This is helps you with JavaScript concepts. Continue reading content from this book and master Javascript",
		book: require("../../Assets/bookimg/book4.webp"),
		imag: "book4.webp",
		level: "Beginner",
	},
	{
		course_id: "1001",
		name: "JavaScript Mastery",
		title: "This is helps you with JavaScript concepts. Continue reading content from this book and master Javascript",
		book: require("../../Assets/bookimg/book1.jpeg"),
		imag: "book1.jpeg",
		level: "Beginner",
	},
	{
		course_id: "1002",
		name: "Learn Digital Marketing",
		title: "This is helps you with Digital Marketing concepts. Enroll to course now",
		book: require("../../Assets/bookimg/book2.jpg"),
		imag: "book2.jpg",
		level: "Beginner",
	},
	{
		course_id: "1003",
		name: "How to survive",
		title: "This is helps you with JavaScript concepts. Continue reading content from this book and master Javascript",
		book: require("../../Assets/bookimg/book3.jpeg"),
		imag: "book3.jpeg",
		level: "Beginner",
	},
	{
		course_id: "1004",
		name: "Your best life",
		title: "This is helps you with JavaScript concepts. Continue reading content from this book and master Javascript",
		book: require("../../Assets/bookimg/book4.webp"),
		imag: "book4.webp",
		level: "Beginner",
	},
];

interface EnrollCoursesProps {}

const EnrollCourses: React.FC<EnrollCoursesProps> = () => {
	const [loader, setloader] = useState(false);
	const user_id = localStorage.getItem("user_id");
	const level = localStorage.getItem("level");
	const navigate = useNavigate();

	const selectedCourse = data.filter((item) => item.level === level);

	const enrollForCourse = async (
		course_id: string,
		name: string,
		title: string,
		book: string
	) => {
		setloader(true);
		axios
			.post("/enroll", {
				course_id: course_id,
				user_id: user_id,
				name: name,
				title: title,
				book: book,
			})
			.then(({ data }) => {
				setloader(false);
				navigate("/dashboard");
			})
			.catch((err) => {
				setloader(false);
				console.log(err);
			});
	};

	return (
		<DashboardLayout>
			<section className="w-11/12 mx-auto py-8 -z-10">
				<div className="lg:grid lg:grid-cols-12 gap-4">
					{selectedCourse &&
						selectedCourse.map((items, n) => (
							<CourseEnroll
								name={items.name}
								title={items.title}
								book={items.book}
								handleEnroll={() =>
									enrollForCourse(
										items.course_id,
										items.name,
										items.title,
										items.imag
									)
								}
								loader={loader}
								key={n}
							/>
						))}
				</div>
			</section>
		</DashboardLayout>
	);
};

export default EnrollCourses;
