import { getCustomRepository } from "typeorm";
import { ComplimentTypesRepositories } from "../repositories/ComplimentTypesRepositories";

class CreateComplimentTypeService {
    async execute(name:string) {
        const complimentTypeRepositories = getCustomRepository(ComplimentTypesRepositories);

        if (!name) {
            throw new Error("Incorrect name!");
        }

        const complimentTypeAlreadyExists = await complimentTypeRepositories.findOne({
            name 
        })

        if (complimentTypeAlreadyExists) {
            throw new Error("Complement type already exists!")
        }

        const complimentType = complimentTypeRepositories.create( {
            name  
        });

        await complimentTypeRepositories.save(complimentType);

        return complimentType;
    }
}

export { CreateComplimentTypeService }