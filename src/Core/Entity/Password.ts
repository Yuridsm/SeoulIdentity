import { pbkdf2, randomBytes } from "crypto";

export default class Password {
    private readonly _value: string;
    private readonly _salt: string | undefined;

    constructor (password: string, salt?: string) {

        if (password.length < 8) throw new Error("Invalid parameter");

        this._value = password;
        this._salt = salt;
    }

    static async Factory(password: string, salt?: string): Promise<Password> {
        const generatedSalt = salt || randomBytes(20).toString("hex");

        return new Promise((resolve) => {
            pbkdf2(password, generatedSalt, 100, 64, "sha512", (error, value) => {
                resolve(new Password(value.toString("hex"), generatedSalt));
            });
        });
    }

    getValue(): string {
        return this._value;
    }

    getSalt(): string | undefined {
        return this._salt;
    }
}