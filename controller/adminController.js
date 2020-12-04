import passport from "passport";
import routes from "../routes";
import Admin from "../models/Admin";

export const postJoin = async (req, res, next) => {
  const {
    body: { username, password },
  } = req;
  try {
    const user = await Admin({
      username,
    });
    await Admin.register(user, password);
    next();
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

// admin log-in
export const getAdminLogin = (req, res) => {
  console.log("ok");
};

export const postAdminLogin = (req, res, next) => {
  if (req.isAuthenticated()) {
    console.log("login success");
  }
  passport.authenticate("local", (authError, user, info) => {
    if (authError) {
      console.log(authError);
      return next(authError);
    }
    if (!user) {
      return res.json(info);
    }
    return req.logIn(user, (loginError) => {
      if (loginError) {
        console.log(loginError);
        return next(loginError);
      }
      return res.json({ user });
    });
  })(req, res, next);
};

// export const postAdminLogin = passport.authenticate("local");

// admin logout
export const getAdminLogout = (req, res, next) => {
  req.logout();
  res.send("LoggedOut");
  next();
};
