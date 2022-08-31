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

export const createAnAdmin = async (req: Request, res: Response) => {
	const admin_name = req.body.admin_name;
	const password = req.body.password;

	let salt = bcrypt.genSaltSync(10);

	bcrypt.hash(password, salt, (err, hash) => {
		if (err) {
			console.log(err);
		}

		db.query(
			"INSERT INTO admin(admin_name, password) VALUES (?, ?)",
			[admin_name, hash],
			(err, result) => {
				if (err) {
					console.log(err);
				} else {
					res.send("Success");
				}
			}
		);
	});
};
