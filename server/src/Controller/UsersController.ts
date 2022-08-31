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
			}
			if (result.length > 0) {
				bcrypt.compare(password, result[0].password, (err, response) => {
					if (err) {
						console.log(err);
					}
					if (response) {
						const id = result[0].id;
						const name = result[0].username;
						const token = Jwt.sign(
							{ id, name },
							process.env.SECRET_TOKEN_ADMIN as string
						);

						res.status(200).header("auth-admin-token", token).json({
							auth: 1,
							token: token,
							username: name,
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
