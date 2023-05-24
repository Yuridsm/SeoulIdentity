export default class Password {
    private value: string;

    constructor (password: string) {

        if (password.length < 8) throw new Error("Invalid parameter");

        this.value = password;
    }

    getValue(): string {
        return this.value;
    }
}