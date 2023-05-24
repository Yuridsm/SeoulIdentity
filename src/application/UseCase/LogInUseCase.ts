import IUserRepository from "../repository/IUserRepository"

export default class LogInUseCase {
    constructor(readonly userRepository: IUserRepository) {
    }

    async execute(input: Input) : Promise<Output> {
        const user = await this.userRepository.getByEmail(input.email);
        
        if (!user) throw new Error("Authentication failed.");

        if (user.password.getValue() !== input.password) throw new Error("Authentication failed.");

        return {
            name: user.name.getValue(),
            token: "123456"
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