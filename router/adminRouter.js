import express from "express";
import {
  getAdminLogin,
  getAdminLogout,
  postAdminLogin,
} from "../controller/adminController";
import routes from "../routes";

const adminRouter = express.Router();

adminRouter.get(routes.adminLogin, getAdminLogin);
adminRouter.post(routes.adminLogout, postAdminLogin);

adminRouter.get(routes.adminLogout, getAdminLogout);

export default adminRouter;
