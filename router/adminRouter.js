import express from "express";
import {
  getAdminLogin,
  getAdminLogout,
  postAdminLogin,
  postJoin,
} from "../controller/adminController";
import routes from "../routes";

const adminRouter = express.Router();

adminRouter.post(routes.adminJoin, postJoin, postAdminLogin);

adminRouter.get(routes.adminLogin, getAdminLogin);
adminRouter.post(routes.adminLogin, postAdminLogin);

adminRouter.get(routes.adminLogout, getAdminLogout);

export default adminRouter;
