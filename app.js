import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import AppError from "./utils/AppError"; // Ensure this path is correct
import productRouter from "./routers/productRouter"; // Ensure this path is correct
import userRouter from "./routers/userRouter"; // Ensure this path is correct
import reviewRouter from "./routers/reviewRouter"; // Ensure this path is correct
import orderRouter from "./routers/orderRouter"; // Ensure this path is correct
import globalErrorHandler from "./controllers/errorController"; // Ensure this path is correct

const app = express();

app.use(cors());
app.use(express.json()); // Using express.json() instead of json()
app.use(cookieParser());

app.get("/", (req, res) => {
  res.status(200).json({
    status: "ok",
  });
});

// app.use("/api/v1/products", productRouter);
// app.use("/api/v1/users", userRouter);
// app.use("/api/v1/reviews", reviewRouter);
// app.use("/api/v1/orders", orderRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

export default app;
