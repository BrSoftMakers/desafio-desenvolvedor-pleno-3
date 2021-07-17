import { getCustomRepository } from "typeorm";
import { PostRepositories } from "../repositories/PostRepositories";

class ListPostUniqueService {
    async execute(id: string) {
        const postRepositories = getCustomRepository(PostRepositories);

        const posts = postRepositories.findOne({ id });

        return posts;
    }
}

export { ListPostUniqueService }