import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm"
import { UserRepositories } from "../repositories/UserRepositories"

interface IAuth {
    email: string;
    password: string;
}

class AuthUserService {
    async execute({ email, password }: IAuth) {
        const userRepositories = getCustomRepository(UserRepositories);

        const user = await userRepositories.findOne({ email });

        if (!user)
            throw new Error('Error in E-mail/Password')
        
        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch)
            throw new Error('Error in E-mail/Password')
        
        const token = sign(
            { email: user.email },
            'teste',
            {
                subject: user.id,
                expiresIn: '1d'
            }
        )

        return token;
    }
}
export { AuthUserService }