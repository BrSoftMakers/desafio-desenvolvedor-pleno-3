import { EntityRepository, Repository } from "typeorm";
import { User } from "../models/User";

@EntityRepository(User)
class UserRepositories extends Repository<User> { }

export { UserRepositories }