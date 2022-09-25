import express from "express";
import multer from "multer";
import {
	createUsers,
	enrollUsers,
	getAllCourses,
	loginUser,
} from "../Controller/UsersController";

const router = express.Router();

router.post("/signup", createUsers);

router.post("/loginUser", loginUser);

router.get("/courses/:user_id", getAllCourses);

router.post("/enroll", enrollUsers);

export default router;
