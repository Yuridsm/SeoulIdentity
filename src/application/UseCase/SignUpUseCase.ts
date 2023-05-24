import User from "../../core/entity/User";
import IUserRepository from "../repository/IUserRepository"

export default class SignUpUseCase {
    constructor(readonly userRepository: IUserRepository) {
    }

    async execute(input: Input) : Promise<void> {
        const user = await User.Factory(input.name, input.email, input.password, input.age);
        await this.userRepository.save(user);
    }
}

type Input = {
    name: string,
    email: string,
    password: string,
    age: number
}
