import { EntityRepository, Repository } from "typeorm";
import { Posts } from "../entities/Posts";

@EntityRepository(Posts)
class PostsRepositories extends Repository<Posts>{ }

export { PostsRepositories }