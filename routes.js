// global

const HOME = "/";

// admin

const ADMIN = "/admin";
const ADMIN_JOIN = "/join";
const ADMIN_LOGIN = "/login";
const ADMIN_LOGOUT = "/logout";

//  portfolio

const PORTFOLIO = "/portfolio";
const PORTFOLIO_DETAIL = "/:id";
const PORTFOLIO_UPLOAD = "/upload";
const PORTFOLIO_EDIT = "/edit";
const PORTFOLIO_DELETE = "/delete";

const routes = {
  home: HOME,
  admin: ADMIN,
  adminLogin: ADMIN_LOGIN,
  adminLogout: ADMIN_LOGOUT,
  adminJoin: ADMIN_JOIN,
  portfolio: PORTFOLIO,
  portfolioDetail: PORTFOLIO_DETAIL,
  portfolioUpload: PORTFOLIO_UPLOAD,
  portfolioEdit: PORTFOLIO_EDIT,
  portfolioDelete: PORTFOLIO_DELETE,
};

export default routes;
