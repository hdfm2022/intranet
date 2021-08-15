import { Request, Response, NextFunction } from "express"

export function ensureAdmin(request: Request, response: Response, next: NextFunction) {
    // verificar se usuário é admin
    const admin = true;

    if (admin) {
        return next();
    } 

    response.status(401).json({
        error: "Unauthorized"
    })
}