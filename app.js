import express, { json } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import AppError from "./utils/AppError";
import productRouter from "./routers/productRouter";
import userRouter from "./routers/userRouter";
import reviewRouter from "./routers/reviewRouter";
import orderRouter from "./routers/orderRouter";
import globalErrorHandler from "./controllers/errorController";

const app = express();

app.use(cors());
app.use(json());
app.use(cookieParser());

app.get("/", (req, res, next) => {
  return res.status(200).json({
    status: "ok",
  });
});

app.use("/api/v1/products", productRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/reviews", reviewRouter);
app.use("/api/v1/orders", orderRouter);

app.use("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

export default app;
