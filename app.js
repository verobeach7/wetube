import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser, { urlencoded } from "body-parser";
import cookieParser from "cookie-parser";
import { userRouter } from "./router";

const app = express();

const handleHome = (req, res) => res.send("Hello from ass!!");

const handleProfile = (req, res) => res.send("You are on my profile");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());

app.get("/", handleHome);

app.get("/profile", handleProfile);

// /user 라우트로 접근하면 userRouter에 있는 경로를 모두 주는 것
app.use("/user", userRouter);

export default app;
