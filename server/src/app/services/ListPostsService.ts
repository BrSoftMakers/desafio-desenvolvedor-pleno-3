import { getCustomRepository } from "typeorm"
import { PostRepositories } from "../repositories/PostRepositories"

class ListPostsService {
    async execute() {
        const postRepositories = getCustomRepository(PostRepositories);

        const posts = postRepositories.find();

        return posts;
    }
}

export { ListPostsService }