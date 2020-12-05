import express from "express";
import { postUpload } from "../controller/portfolioController";
import routes from "../routes";

const portfolioRouter = express.Router();

portfolioRouter.post(routes.portfolioUpload, postUpload);

export default portfolioRouter;
