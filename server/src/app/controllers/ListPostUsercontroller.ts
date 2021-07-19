import { Request, Response } from "express";
import { ListPostUserService } from "../services/listPostUserService";

class ListPostUserController {
    async handle(req: Request, res: Response) {
        const { user_id } = req.body;

        const listPostsUniqueService = new ListPostUserService();

        const posts = await listPostsUniqueService.execute( user_id );

        return res.json(posts);
    }
}

export { ListPostUserController }