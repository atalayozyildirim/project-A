import express from "express";
import type { Request, Response } from "express";
import helmet from "helmet";
import ConnectionDb from "./src/config/ConnectionDb";
import router from "./src/router/index";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

app.use("/api", router);
app.listen(3000, async () => {
  try {
    if (!Bun.env.MONGO_URI) throw new Error("MONGO_URI is not defined");
    await ConnectionDb.connect();

    console.log("Server is running on port 3000");
  } catch (error) {
    console.log(error);
  }
});
