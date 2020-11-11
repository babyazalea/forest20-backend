import passport from "passport";
import Admin from "./models/Admin";

passport.use(Admin.createStrategy());

passport.serializeUser(Admin.serializeUser());
passport.deserializeUser(Admin.deserializeUser());
