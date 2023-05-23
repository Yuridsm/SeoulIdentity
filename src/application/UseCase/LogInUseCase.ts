import User from "../../core/entity/User";
import IUserRepository from "../repository/IUserRepository"

export default class LogInUseCase {
    constructor(readonly userRepository: IUserRepository) {
    }

    async execute(input: Input) : Promise<Output> {
        const user = await this.userRepository.getByEmail(input.email);
        
        if (!user) throw new Error("Authentication failed.");

        if ((user as User).password !== input.password) throw new Error("Authentication failed.");

        return {
            name: "Yuri Melo",
            token: "123"
        }
    }
}

type Input = {
    email: string,
    password: string
};

type Output = {
    name: string,
    token: string
};