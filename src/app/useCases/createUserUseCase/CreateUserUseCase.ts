import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../../repositories/UsersRepositories"

interface IUser {
    name: string;
    email: string;
    password: string;
}

class CreateUserUseCase {
    async execute({ name, email, password }: IUser) {
        const usersRepositories = getCustomRepository(UsersRepositories);
        if (!email)
            throw new Error('E-mail incorrect')
        
        const userAlreadyExists = await usersRepositories.findOne({ email });

        if (userAlreadyExists)
            throw new Error('Email exists!')
        
        const passwordHash = await hash(password, 8);

        const user = usersRepositories.create({
            name,
            email,
            password
        });

        await usersRepositories.save(user);

        return user;
    }
}
export { CreateUserUseCase }