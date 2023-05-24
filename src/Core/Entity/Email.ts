export default class Email {
    private value: string;

    constructor (email: string) {

        // Busines Rule Applied to E-mail
        if(!String(email).toLowerCase().match(/^[\w-]+(\.[\w-]+)*@([a-zA-Z0-9-]+\.)+[a-zA-z]{2,}$/)) {
            throw new Error("Invalid parameter")
        }

        this.value = email;
    }

    getValue(): string {
        return this.value;
    }
}