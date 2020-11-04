import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import helmet from "helmet";
import path from "path";
import routes from "./routes";
import globalRouter from "./router/globalRouter";
import adminRouter from "./router/adminRouter";

const PORT = 2020;
const app = express();

app.use(helmet());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes.home, globalRouter);
app.use(routes.admin, adminRouter);

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
