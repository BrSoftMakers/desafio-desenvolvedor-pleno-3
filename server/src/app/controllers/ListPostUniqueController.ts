import { Request, Response } from "express";
import { ListPostUniqueService } from "../services/ListPostUniqueService";

class ListPostUniqueController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        const listPostsUniqueService = new ListPostUniqueService();

        const posts = await listPostsUniqueService.execute( id );

        return res.json(posts);
    }
}

export { ListPostUniqueController }