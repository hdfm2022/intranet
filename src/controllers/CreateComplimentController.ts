
import { Request, Response } from "express";
import { CreateComplimentService } from "../services/CreateComplimentService";

class CreateComplimentController {
    async handle(request: Request, response: Response) {
        const { compliment_type_id, message, user_sender, user_receiver } = request.body;

        const createComplimentService = new CreateComplimentService()

        const compliment = await createComplimentService.execute( {compliment_type_id, message, user_sender, user_receiver } );
        return response.json(compliment);
    }
}

export { CreateComplimentController }