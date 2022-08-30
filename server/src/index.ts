import express, { Application, Request, Response } from "express";

const app: Application = express();

const PORT = "8081";

app.get("/", (req: Request, res: Response): void => {
	res.send("Server up and running");
});

app.listen(PORT, (): void => {
	console.log(`Server running on port ${PORT}`);
});
