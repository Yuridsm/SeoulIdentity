export default class Name {
    private value: string;

    constructor (name: string) {
        if (name.split(" ").length < 2) throw new Error("Invalid parameter");

        this.value = name;
    }

    getValue(): string {
        return this.value;
    }
}