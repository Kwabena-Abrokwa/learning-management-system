import express from "express";
import multer from "multer";
import { createUsers, loginUser } from "../Controller/UsersController";

const router = express.Router();

router.post("/signup", createUsers);

router.post("/loginUser", loginUser);

export default router;
