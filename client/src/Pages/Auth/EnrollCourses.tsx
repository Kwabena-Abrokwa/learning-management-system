import React from "react";
import DashboardLayout from "../../Components/LayoutComponent/DashboardLayout";
import CourseEnroll from "../../Components/MadeComponent/CourseEnroll";
import book1 from "../../Assets/book1.jpeg";

interface EnrollCoursesProps {}

const EnrollCourses: React.FC<EnrollCoursesProps> = ({}) => {
	return (
		<DashboardLayout>
			<section className="w-11/12 mx-auto py-8 -z-10">
				<div className="lg:grid lg:grid-cols-12 gap-4">
					<CourseEnroll book={book1} />
					<CourseEnroll book={book1} />
					<CourseEnroll book={book1} />
					<CourseEnroll book={book1} />
				</div>
			</section>
		</DashboardLayout>
	);
};

export default EnrollCourses;
