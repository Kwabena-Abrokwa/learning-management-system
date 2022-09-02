import React, { useState, useEffect } from "react";
import DashboardLayout from "../../Components/LayoutComponent/DashboardLayout";
import kids from "../../Assets/kids.jpeg";
import BookCard from "../../Components/MadeComponent/BookCard";
import CustomButton from "../../Components/Customs/CustomButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface HomeDashboardProps {}

const HomeDashboard: React.FC<HomeDashboardProps> = () => {
	const [courses, setcourses] = useState([]);
	const [loader, setloader] = useState<Boolean>(true);
	const user_id = localStorage.getItem("user_id");

	const navigate = useNavigate();

	const handleGoToCourses = () => {
		navigate("/courses");
	};

	useEffect(() => {
		axios
			.get(`/courses/${user_id}`)
			.then(({ data }) => {
				setloader(false);
				setcourses(data);
				console.log(data);
			})
			.catch((err) => {
				console.log(err);

				setloader(false);
			});

		return () => {};
	}, [courses, user_id]);

	return (
		<DashboardLayout>
			<section className="w-11/12 mx-auto py-8 -z-10">
				{courses.length < 1 && loader ? (
					<div className="text-center w-5/6 mx-auto">
						<img src={kids} className="w-full" alt="kids" />
						<h1 className="text-xl py-5 font-bold">Please wait</h1>
					</div>
				) : courses.length < 1 && loader === false ? (
					<div className="text-center w-5/6 mx-auto">
						<img src={kids} className="w-full" alt="kids" />
						<h1 className="text-xl py-5 font-bold">
							No courses enrolled yet
						</h1>
						<CustomButton
							children="Go to courses"
							onclick={handleGoToCourses}
						/>
					</div>
				) : (
					<div>
						<h1 className="text-4xl py-5 font-bold">Enrolled courses</h1>
						<div className="lg:grid lg:grid-cols-12 gap-4">
							{courses &&
								courses.map((items: any) => (
									<BookCard
										book={items.book}
										name={items.name}
										title={items.title}
										course_id={items.course_id}
									/>
								))}
						</div>
					</div>
				)}
			</section>
		</DashboardLayout>
	);
};

export default HomeDashboard;
