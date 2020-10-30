import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import routes from "./routes";
import globalRouter from "./router/globalRouter";
import adminRouter from "./router/adminRouter";

const PORT = 2020;
const app = express();

app.use(helmet());
app.use(morgan("dev"));

app.use(routes.home, globalRouter);
app.use(routes.admin, adminRouter);

const handleListening = () => {
  console.log(`Listening on: http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
