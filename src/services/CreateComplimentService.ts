import { getCustomRepository } from "typeorm";
import { ValidationError } from "../errors/ValidationError";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IComplimentRequest {
    compliment_type_id;
    user_sender: string;
    user_receiver: string;
    message: string;
}

class CreateComplimentService {
    async validate( { compliment_type_id, user_sender, user_receiver, message }: IComplimentRequest ) {
        const usersRepositories = getCustomRepository(UsersRepositories);
        const validationErrors = [];

        if (!message) {
            validationErrors.push( {"data": "message", "problem": "missing"} )
        }

        if (user_receiver === user_sender) {
            validationErrors.push( {"data": "user_receiver", "problem": "equals", "data2": "user_sender"} )
        }

        const userReceiverExists = await usersRepositories.findOne(user_receiver)
        if (!userReceiverExists) {
            validationErrors.push( {"data": "user_receiver", "problem": "does_not_exist"} )
        }

        if (validationErrors.length > 0) {
            throw new ValidationError(validationErrors);
        }
    }

    async execute({ compliment_type_id, user_sender, user_receiver, message }: IComplimentRequest) {
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories)

        await this.validate({ compliment_type_id, user_sender, user_receiver, message })

        const compliment = complimentsRepositories.create({
            compliment_type_id,
            user_sender,
            user_receiver,
            message,
        })

        await complimentsRepositories.save(compliment);

        return compliment;

    }
}

export { CreateComplimentService }