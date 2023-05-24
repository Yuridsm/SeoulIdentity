import { pbkdf2, randomBytes } from "crypto";

export default class Password {
    
    constructor (readonly value: string, readonly salt: string) {

        if (value.length < 8) throw new Error("Invalid parameter");
    }

    static async GeneratePassword(password: string, salt?: string): Promise<Password> {
        if (password.length < 8) throw new Error("Invalid parameter");

        const generatedSalt = salt || randomBytes(20).toString("hex");

        return new Promise((resolve) => {
            pbkdf2(password, generatedSalt, 100, 64, "sha512", (error, value) => {
                resolve(new Password(value.toString("hex"), generatedSalt));
            });
        });
    }

    getValue(): string {
        return this.value;
    }

    getSalt(): string {
        return this.salt;
    }

    async validate(planPassword: string): Promise<boolean> {
        return new Promise((resolve) => {
            pbkdf2(planPassword, this.salt, 100, 64, "sha512", (error, value) => {
                resolve(this.value === value.toString("hex"));
            });
        });
    }
}
