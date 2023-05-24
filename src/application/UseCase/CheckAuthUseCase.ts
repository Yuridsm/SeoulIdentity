import User from "../../core/entity/User";
import TokenGeneratorService from "../../core/services/TokenGeneratorService";

export default class CheckAuthUseCase {
    constructor () {
    }

    async execute(token: string): Promise<Output> {
        const tokenGenerator = new TokenGeneratorService("top-secret-key");
        const payload = await tokenGenerator.verify(token);
        return {
            email: (payload as { email: string }).email
        }
    }
}

type Output = {
    email: string
};