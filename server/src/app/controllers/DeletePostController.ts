import { Request, Response } from "express";
import { DeletePostService } from "../services/DeletePostService";

class DeletePostController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        const deletePostService = new DeletePostService();

        await deletePostService.execute({ id });

        return res.json('Deleted');
    }
}

export { DeletePostController }