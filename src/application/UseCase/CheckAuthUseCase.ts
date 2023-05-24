import TokenGeneratorAdapter from "../../core/adapters/TokenGeneratorAdapter";

export default class CheckAuthUseCase {
    constructor () {
    }

    async execute(token: string): Promise<Output> {
        const tokenGenerator = new TokenGeneratorAdapter("top-secret-key");
        const payload = await tokenGenerator.verify(token);
        return {
            email: (payload as { email: string }).email
        }
    }
}

type Output = {
    email: string
};