import express from "express";
import { getHome } from "../controller/globalController";

const globalRouter = express.Router();

globalRouter.get("/", getHome);

export default globalRouter;
