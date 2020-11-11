import express from "express";
import routes from "../routes";
import { getHome } from "../controller/globalController";

const globalRouter = express.Router();

globalRouter.get(routes.home, getHome);

export default globalRouter;
