import { getCustomRepository } from "typeorm";
import { PostRepositories } from "../repositories/PostRepositories"

interface IPost {
    id: string;
}

class DeletePostService {
    async execute({ id }: IPost) {
        const postRepositories = getCustomRepository(PostRepositories);

        const postAlreadyExists = await postRepositories.findOne({ id });

        if (!postAlreadyExists)
            throw new Error('ID not exists')
        
        postRepositories.delete(id);

        return;
    }
}

export { DeletePostService }