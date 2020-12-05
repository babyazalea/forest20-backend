import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import passport from "passport";
import mongoose from "mongoose";
import session from "express-session";
import MongoStore from "connect-mongo";
import dotenv from "dotenv";
dotenv.config();
import path from "path";
import flash from "express-flash";
import routes from "./routes";
import globalRouter from "./router/globalRouter";
import adminRouter from "./router/adminRouter";
import portfolioRouter from "./router/portfolioRouter";

import "./models/Admin";
import "./passport";

const PORT = 2020;
const app = express();

const CookieStore = new MongoStore(session);

app.use(helmet());
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors({ credentials: true, origin: true }));
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    store: new CookieStore({ mongooseConnection: mongoose.connection }),
  })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use(routes.home, globalRouter);
app.use(routes.admin, adminRouter);
app.use(routes.portfolio, portfolioRouter);

const handleListening = () => {
  console.log(`Listening on: http://localhost:${PORT}`);
};

mongoose.connect("mongodb://localhost:27017/forest20", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const handleConnectDB = () => console.log("Connected to DB");
const handleErrorDB = () => console.log(`Error On DB Connection:${error}`);

db.once("open", handleConnectDB);
db.on("error", handleErrorDB);

app.listen(PORT, handleListening);
