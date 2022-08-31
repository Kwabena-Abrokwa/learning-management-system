import React from "react";
import { Link } from "react-router-dom";

interface AsideBarProps {}

const AsideBar: React.FC<AsideBarProps> = () => {
	return (
		<aside className="bg-[#1DA1F2] h-screen flex-row justify-center items-center fixed overflow-scroll w-1/6 pt-10 text-white">
			<Link to={"/dashboard"}>
				<p className="text-center text-xl py-10 cursor-pointer">Home</p>
			</Link>
			<Link to={"/courses"}>
				<p className="text-center text-xl py-10 cursor-pointer">Courses</p>
			</Link>
			<Link to={"/dashboard"}>
				<p className="text-center text-xl py-10 cursor-pointer">
					Inspiring Video
				</p>
			</Link>
		</aside>
	);
};

export default AsideBar;
