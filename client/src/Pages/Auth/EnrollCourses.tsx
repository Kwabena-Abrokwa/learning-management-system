import axios from "axios";
import React, { useState } from "react";
import DashboardLayout from "../../Components/LayoutComponent/DashboardLayout";
import CourseEnroll from "../../Components/MadeComponent/CourseEnroll";
import { useNavigate } from "react-router";
import { CourseData } from "../../Data/CourseData";

interface EnrollCoursesProps {}

const EnrollCourses: React.FC<EnrollCoursesProps> = () => {
	const [loader, setloader] = useState(false);
	const user_id = localStorage.getItem("user_id");
	const level = localStorage.getItem("level");
	const navigate = useNavigate();

	const selectedCourse = CourseData.filter((item) => item.level === level);

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
