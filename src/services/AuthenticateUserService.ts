import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"

interface IAutenthicationRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute({email, password} : IAutenthicationRequest) {
        // se email existe
        const usersRepositories = getCustomRepository(UsersRepositories);
        const user = await usersRepositories.findOne({
            email 
        })

        if(!user) {
            throw new Error("Email/Password incorrect");
        }

        // se senha esta correta
        const isCorrectPassword = compare(password, user.password);
        if (!isCorrectPassword) {
            throw new Error("Email/Password incorrect");
        }

        // gerar token
        const token = sign({email: user.email}, "57cb458c4f8231fd9e03573eeb0cbe0d", {
            subject: user.id ,
            expiresIn: "1d"
        })

        return token;
    }
}

export { AuthenticateUserService }