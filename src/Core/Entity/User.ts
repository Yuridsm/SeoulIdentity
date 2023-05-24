import Email from "./Email";
import IAggregateRoot from "./IAggregateRoot";

export default class User implements IAggregateRoot {
    private constructor(
        readonly name: string, 
        readonly email: Email, 
        readonly password: string, 
        readonly age: number) {
    }

    static Factory(name: string, email: string, password: string, age: number) {
        new User(name, new Email(email), password, age)
    }
};
