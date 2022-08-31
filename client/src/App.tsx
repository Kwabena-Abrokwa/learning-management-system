import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Guest/Login";
import Signup from "./Pages/Guest/Signup";
import HomeDashboard from "./Pages/Auth/HomeDashboard";
import EnrollCourses from "./Pages/Auth/EnrollCourses";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/dashboard" element={<HomeDashboard />} />
				<Route path="/courses" element={<EnrollCourses />} />
			</Routes>
		</div>
	);
}

export default App;
