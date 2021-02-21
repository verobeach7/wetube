import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser, { urlencoded } from "body-parser";
import cookieParser from "cookie-parser";

const app = express();

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hello from ass!!");

const handleProfile = (req, res) => res.send("You are on my profile");

// Middleware: 중간 처리 과정, 여러 개 가질 수 있음(로그인 여부 확인, 파일 가로채기, 로그 기록 등 뭐든지)
// const betweenHome = (req, res, next) => {
//   console.log("Between");
//   next();
// };
// app.use(betweenHome);

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
