import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories"

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
    password: string;
}

class CreateUserService {
    async execute({ name, email, admin, password }: IUserRequest) {
        if (!email) {
            throw new Error("Email incorrect");
        }

        const usersRepositories = getCustomRepository(UsersRepositories);
        const userAlreadyExists = await usersRepositories.findOne({
            email
        });

        if (userAlreadyExists) {
            throw new Error("User already exists");
        }

        const user = usersRepositories.create({
            name,
            email,
            admin,
            password
        })

        await usersRepositories.save(user);
        return user;
    }
}

export { CreateUserService }