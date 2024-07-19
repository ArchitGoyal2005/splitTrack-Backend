import { config } from "dotenv";
import { connect } from "mongoose";
import app from "./app"; // Ensure this path is correct

process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  process.exit(1);
});

config({ path: "./.env.local" });

const port = process.env.PORT || 3000;

const dbUri = process.env.DB_URI;
const dbPass = process.env.DB_PASS;

if (!dbUri || !dbPass) {
  console.error(
    "DB_URI and DB_PASS must be defined in the environment variables"
  );
  process.exit(1);
}

const dbUrl = dbUri.replace("<password>", dbPass);

connect(dbUrl)
  .then(() => {
    console.log("Database is running");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
    process.exit(1);
  });

const server = app.listen(port, () => {
  console.log("Server is running on the port", port);
});

process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err);
  server.close(() => {
    process.exit(1);
  });
});

//test commit
