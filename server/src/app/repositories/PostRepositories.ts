import { EntityRepository, Repository } from "typeorm";
import { Post } from "../models/Post";

@EntityRepository(Post)
class PostRepositories extends Repository<Post> { }

export { PostRepositories }