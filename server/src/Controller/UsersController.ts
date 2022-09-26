import { Request, Response } from "express";
import mysql from "mysql";
import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken";

const db = mysql.createConnection({
	user: "root",
	host: "localhost",
	password: "",
	database: "lms",
});

export const createUsers = async (req: Request, res: Response) => {
	const email = req.body.email;
	const username = req.body.user_name;
	const entry = req.body.entry;
	const password = req.body.password;

	let salt = bcrypt.genSaltSync(10);

	bcrypt.hash(password, salt, (err, hash) => {
		if (err) {
			console.log(err);
		}

		db.query(
			"INSERT INTO users(email, username, entry, password) VALUES (?, ?, ?, ?)",
			[email, username, entry, hash],
			(err, result) => {
				if (err) {
					console.log(err);
				} else {
					res.json({
						auth: 1,
						message: "Acoount created successfully.",
					});
					console.log("Success");
				}
			}
		);
	});
};

export const loginUser = (req: Request, res: Response) => {
	const username = req.body.user_name;
	const password = req.body.password;

	db.query(
		"SELECT * FROM users WHERE username = ?",
		username,
		(err, result) => {
			if (err) {
				console.log(err);
				return res.status(401).json({ message: "Something went wrong" });
			}
			if (result.length > 0) {
				bcrypt.compare(password, result[0].password, (err, response) => {
					if (err) {
						console.log(err);
					}
					if (response) {
						const id = result[0].id;
						const name = result[0].username;
						const level = result[0].entry;
						const token = Jwt.sign(
							{ id, name },
							process.env.SECRET_TOKEN_ADMIN as string
						);

						res.status(200).header("auth-admin-token", token).json({
							auth: 1,
							token: token,
							username: name,
							id: id,
							level: level,
						});
						console.log("Success");
					} else {
						res.json({
							auth: 0,
							message: "Id / Password does not match",
						});
					}
				});
			} else {
				res.status(400).json({ auth: 0, message: "No user found" });
			}
		}
	);
};

export const getAllCourses = (req: Request, res: Response) => {
	const user_id = req.params.user_id;

	db.query(
		"SELECT * FROM courses WHERE user_id = ?",
		user_id,
		(err, results) => {
			if (err) {
				console.log(err);
				return res.status(401).json({ message: "Something went wrong" });
			} else {
				return res.status(201).json(results);
			}
		}
	);
};

export const enrollUsers = (req: Request, res: Response) => {
	const course_id = req.body.course_id;
	const user_id = req.body.user_id;
	const name = req.body.name;
	const title = req.body.title;
	const book = req.body.book;

	db.query(
		"INSERT INTO courses(course_id, user_id, name, title, book) VALUES (?, ?, ?, ?, ?)",
		[course_id, user_id, name, title, book],
		(err, result) => {
			if (err) {
				console.log(err);
				return res.status(401).json({ message: "Something went wrong" });
			} else {
				console.log(`${name} enrolled succesffully, start lessons`);
				return res.status(201).json({
					message: `${name} enrolled succesffully, start lessons`,
				});
			}
		}
	);
};
