import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";


class CreateUserController {
    async handle(req: Request, res: Response) {
        const { name, email, password } = req.body;

        const createUserUseCase = new CreateUserUseCase();

        const user = await createUserUseCase.execute({
            name,
            email,
            password
        });

        return res.json(user)
    }
}

export { CreateUserController }