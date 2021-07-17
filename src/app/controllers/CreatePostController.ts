import { Request, Response } from "express";
import { CreatePostService } from "../services/CreatePostService";

class CreatePostController {
    async handle(req: Request, res: Response) {
        const { title, content, user_id } = req.body;

        const createPostService = new CreatePostService();

        const post = await createPostService.execute({
            title,
            content,
            user_id
        });

        return res.json(post);
    }
}

export { CreatePostController }