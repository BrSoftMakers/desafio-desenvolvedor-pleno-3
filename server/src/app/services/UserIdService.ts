import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";

class UserIdService {
    async execute(email: string) {
        const userRepositories = getCustomRepository(UserRepositories);

        const user = userRepositories.findOne({ email });

        return user;
    }
}

export { UserIdService }