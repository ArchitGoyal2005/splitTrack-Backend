import { config } from "dotenv";
import { connect } from "mongoose";
import { listen } from "./app";

process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  console.log("Unhandled Exception!");
  process.exit(1);
});

config({ path: "./.env.local" });

const port = process.env.PORT;

const dbUrl = process.env.DB_URI.replace("<password>", process.env.DB_PASS);

connect(dbUrl).then(() => {
  console.log("Database is running");
});

const server = listen(port, () => {
  console.log("Server is running on the port ", port);
});

process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("Unhandled Rejection!");
  server.close(() => {
    process.exit(1);
  });
});
