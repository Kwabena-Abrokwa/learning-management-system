import React from "react";
import { Link, useNavigate } from "react-router-dom";

interface NavigationBarProps {}

const NavigationBar: React.FC<NavigationBarProps> = () => {
	const naviagte = useNavigate();
	const username = localStorage.getItem("user_name")
	const handleLogout = () => {
		localStorage.clear();
		naviagte("/");
	};

	return (
		<nav className="flex justify-between items-center py-2 px-3 bg-[#0e2e43] fixed top-0 left-0 w-full h-20 z-50">
			<Link to={"/dashboard"}>
				<p className="px-4 cursor-pointer text-white text-xl">Logo</p>
			</Link>
			<div className="flex justify-between items-center text-white">
				<Link to={"/"}>
					<p className="px-4 cursor-pointer">Welcome {username}</p>
				</Link>
				<button onClick={handleLogout}>
					<p className="px-4 cursor-pointer">Logout</p>
				</button>
			</div>
		</nav>
	);
};

export default NavigationBar;
