import IAggregateRoot from "../../Core/Entity/IAggregateRoot";
import User from "../../Core/Entity/User";
import IUserRepository from "../Repository/IUserRepository"

export default class LogInUseCase {
    constructor(readonly userRepository: IUserRepository) {
    }

    async execute(input: Input) : Promise<Output> {
        const user = await this.userRepository.getByEmail(input.email);
        
        if (!user) throw new Error("Authentication failed.");

        if (user.password !== input.password)
        {
 
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