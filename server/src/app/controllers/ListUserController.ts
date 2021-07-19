import { Request, Response } from "express";
import { ListUserService } from "../services/ListUserService";

class ListUserController {
    async handle(req: Request, res: Response) {
        const listUserService = new ListUserService();

        const posts = await listUserService.execute();

        return res.json(posts);
    }
}

export { ListUserController }