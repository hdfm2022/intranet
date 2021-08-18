import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";

import { router } from "./routes";

import "./database"; // vai pro index
import { BaseError } from "./errors/BaseError";

const app = express();
app.use(express.json());
app.use(router);
app.use((err:Error, request:Request, response:Response, next:NextFunction) => {
    if(err instanceof BaseError) {
        return response.status(err.httpCode).json(
            {
                errorType: err.constructor.name,
                errors: err.list
            }
        )
    }

    if(err instanceof Error) {
        return response.status(400).json({error: err.message})
    }

    return response.status(500).json({
        status: "Error"
        , message: "Internal Server Error"
    })
});

export { app }