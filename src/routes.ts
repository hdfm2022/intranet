import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateComplimentTypeController } from "./controllers/CreateComplimentTypeController";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router();

const createUserController = new CreateUserController();
const createComplimentTypeController = new CreateComplimentTypeController();

router.post("/users", createUserController.handle);
router.post("/compliment_types", ensureAdmin, createComplimentTypeController.handle);

export { router };

// app.get("/test", (request, response) => {
//     return response.send("Teste GET")
// })