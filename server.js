import app from "./app.js";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

const port = process.env.PORT;

const server = app.listen(port, () => {
  console.log("Server is running on the port ", port);
});
