import { getCustomRepository } from "typeorm";
import { PostRepositories } from "../repositories/PostRepositories";

interface IPost {
    id: string;
    title?: string;
    content?: string;
}

class UpdatePostService {
    async execute({ id, title, content }: IPost) {
        const postRepositories = getCustomRepository(PostRepositories);

        const postAlreadyExists = await postRepositories.findOne({ id });

        if (!postAlreadyExists)
            throw new Error('ID incorrect');
        
        postRepositories.update(id, { title, content });

        return;
    }
}

export { UpdatePostService }