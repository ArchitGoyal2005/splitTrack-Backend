import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res, next) => {
  return res.status(200).json({
    status: "ok",
  });
});

export default app;
