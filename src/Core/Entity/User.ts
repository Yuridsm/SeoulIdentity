import Email from "./Email";
import IAggregateRoot from "./IAggregateRoot";
import Name from "./Name";
import Password from "./Password";
    
export default class User implements IAggregateRoot {
    private constructor(
        readonly name: Name, 
        readonly email: Email, 
        readonly password: Password, 
        readonly age: number) {
    }

    static Factory(name: string, email: string, password: string, age: number) : User {
        if (age < 18) throw new Error("Invalid parameter");

        return new User(new Name(name), new Email(email), new Password(password), age);
    }
};
