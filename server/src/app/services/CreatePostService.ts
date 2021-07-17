import { getCustomRepository } from "typeorm"
import { PostRepositories } from "../repositories/PostRepositories"

interface IPost {
    title: string;
    content: string;
    user_id: string;
}

class CreatePostService {
    async execute({ title, content, user_id }: IPost) {
        const postRepositories = getCustomRepository(PostRepositories);

        if (!title)
            throw new Error('Title incorrect');
        
        const postAlreadyExists = await postRepositories.findOne({ title });

        if (postAlreadyExists)
            throw new Error('Title Exists');
        
        const post = postRepositories.create({
            title,
            content,
            user_id
        });

        await postRepositories.save(post);

        return post;
    }
}

export { CreatePostService }