import { Request, Response } from "express"
import { AuthenticateUserService } from "../services/AuthenticateUserService"

class AuthenticatenUserController {
    async handle(request: Request, response: Response) {
        const { email, password } = request.body
        const autenthicateUserService = new AuthenticateUserService()

        const token = await autenthicateUserService.execute({
            email,
            password
        })

        return response.json(token)
    }
}

export { AuthenticatenUserController }