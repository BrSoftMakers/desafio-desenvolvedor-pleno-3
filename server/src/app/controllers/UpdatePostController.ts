import { Request, Response } from "express";
import { UpdatePostService } from "../services/UpdatePostService";

class UpdatePostController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const { title, content } = req.body;

        const updatePostService = new UpdatePostService();

        await updatePostService.execute({ id, title, content });

        return res.json('Auterated');
    }
}

export { UpdatePostController }