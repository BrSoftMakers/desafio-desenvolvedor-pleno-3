import { Request, Response } from "express";
import { UserIdService } from "../services/UserIdService";

class UserIdController {
    async handle(req: Request, res: Response) {
        const { email } = req.body;

        const userIdService = new UserIdService();

        const user = await userIdService.execute( email );

        return res.json(user);
    }
}

export { UserIdController }