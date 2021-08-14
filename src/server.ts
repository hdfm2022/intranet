import "reflect-metadata";
import express from "express";

import "./database"; // vai pro index

const app = express();

// app.get("/test", (request, response) => {
//     return response.send("Teste GET")
// })

// app.post('/test-post', (request, response) => {
//     return response.send("Teste POST")
// })

const httpPort = 3000;
app.listen(httpPort, () => {
    console.clear()
    console.log("Commbox Intranet Server is running")
    console.log("HTTP Port "+httpPort+"")
});