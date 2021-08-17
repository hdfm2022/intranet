import { Router } from "express";

import { ensureAdmin } from "./middlewares/ensureAdmin";

import { CreateUserController } from "./controllers/CreateUserController";
import { CreateComplimentTypeController } from "./controllers/CreateComplimentTypeController";
import { AuthenticatenUserController } from "./controllers/AuthenticateUserController";

const router = Router();

const createUserController = new CreateUserController()
const createComplimentTypeController = new CreateComplimentTypeController()
const autenthicateUserController = new AuthenticatenUserController()

router.post("/users", createUserController.handle);
router.post("/compliment_types", ensureAdmin, createComplimentTypeController.handle);
router.patch("/login", autenthicateUserController.handle);

export { router };

// app.get("/test", (request, response) => {
//     return response.send("Teste GET")
// })