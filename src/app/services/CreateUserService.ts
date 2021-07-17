import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm"
import { UserRepositories } from "../repositories/UserRepositories"

interface IUser {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    async execute({ name, email, password }: IUser) {
        const userRepositories = getCustomRepository(UserRepositories);

        if (!email)
            throw new Error('E-mail incorrect');
        
        const userAlreadyExists = await userRepositories.findOne({ email });

        if (userAlreadyExists)
            throw new Error('User Exists');
        
        const passwordHash = await hash(password, 8);

        const user = userRepositories.create({
            name,
            email,
            password: passwordHash
        });

        await userRepositories.save(user);

        return user;
    }
}

export { CreateUserService }