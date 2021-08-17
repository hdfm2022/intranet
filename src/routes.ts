import { Router } from "express";

import { ensureAdmin } from "./middlewares/ensureAdmin";

import { CreateUserController } from "./controllers/CreateUserController";
import { CreateComplimentTypeController } from "./controllers/CreateComplimentTypeController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { AuthenticatenUserController } from "./controllers/AuthenticateUserController";

const router = Router();

const createUserController = new CreateUserController()
const createComplimentTypeController = new CreateComplimentTypeController()
const autenthicateUserController = new AuthenticatenUserController()
const createComplimentController = new CreateComplimentController()

router.post("/users", createUserController.handle);
router.post("/compliment_types", ensureAdmin, createComplimentTypeController.handle);
router.post("/compliments", ensureAdmin, createComplimentController.handle);
router.patch("/login", autenthicateUserController.handle);

export { router };

// app.get("/test", (request, response) => {
//     return response.send("Teste GET")
// })