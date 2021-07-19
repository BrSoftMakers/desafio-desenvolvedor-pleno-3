import { getCustomRepository } from "typeorm";
import { PostRepositories } from "../repositories/PostRepositories";

class ListPostUserService {
    async execute(user_id: string) {
        const postRepositories = getCustomRepository(PostRepositories);

        const posts = postRepositories.find({ user_id });

        return posts;
    }
}

export { ListPostUserService }