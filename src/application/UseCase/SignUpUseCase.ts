import User from "../../Core/Entity/User";
import IUserRepository from "../Repository/IUserRepository"

export default class SingUpUseCase {
    constructor(readonly userRepository: IUserRepository) {
    }

    async execute(input: Input) : Promise<void> {
        const user = new User(input.name, input.email, input.password, input.age);
        await this.userRepository.save(user);
    }
}

type Input = {
    name: string,
    email: string,
    password: string,
    age: number
}
