import TokenGeneratorService from "../../core/services/TokenGeneratorService";
import IUserRepository from "../repository/IUserRepository"

export default class LogInUseCase {
    constructor(readonly userRepository: IUserRepository) {
    }

    async execute(input: Input) : Promise<Output> {
        const user = await this.userRepository.getByEmail(input.email);
        
        if (!user) throw new Error("Authentication failed.");

        const isValidPassword = await user.validatePassword(input.password);

        if (!isValidPassword) throw new Error("Authentication failed.");

        const tokenGenerator = new TokenGeneratorService("top-secret-key");
        const token = tokenGenerator.generate(user, 100000, new Date("2023-05-24T18:59:59"));

        return {
            name: user.name.getValue(),
            token: token
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