import "dotenv/config";
import "reflect-metadata";
import express from "express";
import { json } from "body-parser";
import rootRouter from "./router";

const port = Number(process.env.GATEWAY_PORT) || 3000;
const app = express();

app.use(json());
app.use("/", rootRouter);

app.listen(port, () => {
  console.log(`Server is running at port ${port}`)
})
