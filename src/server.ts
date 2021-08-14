import "reflect-metadata";
import express from "express";

import { router } from "./routes";

import "./database"; // vai pro index

const app = express();
app.use(express.json());
app.use(router);

const httpPort = 3000;
app.listen(httpPort, () => {
    console.clear()
    console.log("Commbox Intranet Server is running")
    console.log("HTTP Port "+httpPort+"")
});