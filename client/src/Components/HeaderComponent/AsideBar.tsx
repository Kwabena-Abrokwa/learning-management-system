import React from "react";
import { Link, useLocation } from "react-router-dom";

interface AsideBarProps {}

const AsideBar: React.FC<AsideBarProps> = () => {
	const { pathname } = useLocation();

	console.log(pathname);

	return (
		<aside className="bg-[#1DA1F2] h-screen flex-row justify-center items-center fixed overflow-scroll w-1/6 pt-10 text-white">
			<Link to={"/dashboard"}>
				<div
					className={`mt-10 ${
						pathname === "/dashboard"  ? "bg-black mx-2" : ""
					}`}
				>
					<p className="text-center text-xl py-3 cursor-pointer">Home</p>
				</div>
			</Link>
			<Link to={"/courses"}>
				<div
					className={`mt-10 ${
						pathname === "/courses" ? "bg-black mx-2" : ""
					}`}
				>
					<p className="text-center text-xl py-3 cursor-pointer">
						Courses
					</p>
				</div>
			</Link>
		</aside>
	);
};

export default AsideBar;
