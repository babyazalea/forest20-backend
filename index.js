import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import globalRouter from "./router/globalRouter";

const PORT = 2020;
const app = express();

app.use(helmet());
app.use(morgan("dev"));

app.use(globalRouter);

const handleListening = () => {
  console.log(`Listening on: http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
