import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IComplimentRequest {
    compliment_type_id;
    user_sender: string;
    user_receiver: string;
    message: string;
}

class CreateComplimentService {
    async execute({ compliment_type_id, user_sender, user_receiver, message }: IComplimentRequest) {
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories)
        const usersRepositories = getCustomRepository(UsersRepositories);

        if (user_receiver === user_sender) {
            throw new Error("User Receiver Cant Be Equals to User Sender")
        }

        const userReceiverExists = await usersRepositories.findOne(user_receiver)
        if (!userReceiverExists) {
            throw new Error("User Receiver Invalid")
        }

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