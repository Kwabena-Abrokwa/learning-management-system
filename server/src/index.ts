import express, {
	Application,
	Request,
	Response,
	ErrorRequestHandler,
	NextFunction,
} from "express";
import cors from "cors";
import multer from "multer";
import dotenv from "dotenv";
import UserRoutes from "./Routes/UsersRoute";

const app: Application = express();

app.use(cors());
app.use(express.json());
//env file configuration
dotenv.config();

export interface ProcessEnv {
	[key: string]: string | undefined;
}

const PORT = "8081";

app.get("/", (req: Request, res: Response): void => {
	res.send("Server up and running");
});

//This routes are for admins
app.use("/api/users", UserRoutes);

//error handler
app.use(
	(
		err: ErrorRequestHandler,
		req: Request,
		res: Response,
		next: NextFunction
	) => {
		if (err instanceof SyntaxError) {
			res.status(400).send({ success: false, message: "Bad Request" });
		} else if (err instanceof multer.MulterError) {
			if (err.code === "LIMIT_FILE_SIZE") {
				res.status(400).send({
					message: "File too large",
				});
			}
			if (err.code === "LIMIT_FIELD_COUNT") {
				res.status(400).send({
					message: "You can not upload more than one file",
				});
			}

			if (err.code === "LIMIT_UNEXPECTED_FILE") {
				res.status(400).send({
					message: "File should be an image",
				});
			}
		}
	}
);
app.listen(PORT, (): void => {
	console.log(`Server running on port ${PORT}`);
});
