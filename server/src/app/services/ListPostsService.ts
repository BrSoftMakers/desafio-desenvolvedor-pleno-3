import { getCustomRepository } from "typeorm"
import { PostRepositories } from "../repositories/PostRepositories"

class ListPostsService {
    async execute() {
        const postRepositories = getCustomRepository(PostRepositories);

        const posts = postRepositories.findOne();

        return posts;
    }
}

export { ListPostsService }