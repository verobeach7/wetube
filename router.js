import express from "express";

export const userRouter = express.Router();

userRouter.get("/", (req, res) => res.send("user index"));

// /user/edit으로 접근 가능
userRouter.get("/edit", (req, res) => res.send("user edit"));

// /user/password로 접근 가능
userRouter.get("/password", (req, res) => res.send("user password"));
