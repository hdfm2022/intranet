
import { Request, Response } from "express";
import { CreateComplimentTypeService } from "../services/CreateComplimentTypeService";

class CreateComplimentTypeController {
    async handle(request: Request, response: Response) {
        const { name } = request.body;

        const createComplimentTypeService = new CreateComplimentTypeService()

        const complimentType = await createComplimentTypeService.execute(name);
        return response.json(complimentType);
    }
}

export { CreateComplimentTypeController }