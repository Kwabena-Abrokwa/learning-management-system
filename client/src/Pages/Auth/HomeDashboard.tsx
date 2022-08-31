import React from "react";
import DashboardLayout from "../../Components/LayoutComponent/DashboardLayout";
import book1 from "../../Assets/book1.jpeg";
import BookCard from "../../Components/MadeComponent/BookCard";
import CustomButton from "../../Components/Customs/CustomButton";

interface HomeDashboardProps {}

const HomeDashboard: React.FC<HomeDashboardProps> = () => {
	return (
		<DashboardLayout>
			<section className="w-11/12 mx-auto py-8 -z-10">
				<div className="text-center">
					<h1>No courses enrolled yet</h1>
					<CustomButton children="Go to courses" />
				</div>
				<div className="lg:grid lg:grid-cols-12 gap-4">
					<BookCard book={book1} />
					<BookCard book={book1} />
					<BookCard book={book1} />
					<BookCard book={book1} />
					<BookCard book={book1} />
					<BookCard book={book1} />
				</div>
			</section>
		</DashboardLayout>
	);
};

export default HomeDashboard;
