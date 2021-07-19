import { getCustomRepository } from "typeorm"
import { UserRepositories } from "../repositories/UserRepositories"

class ListUserService {
    async execute() {
        const userRepositories = getCustomRepository(UserRepositories);

        const users = userRepositories.find();

        return users;
    }
}

export { ListUserService }