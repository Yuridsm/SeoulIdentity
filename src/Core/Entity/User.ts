import IAggregateRoot from "./IAggregateRoot";

export default class User implements IAggregateRoot {
    constructor(
        readonly name: string, 
        readonly email: string, 
        readonly password: string, 
        readonly age: number) {

    }
}