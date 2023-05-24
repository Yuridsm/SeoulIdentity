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
        if (age < 18) throw new Error("Invalid parameter");
    }

    static async Factory(name: string, email: string, password: string, age: number) : Promise<User> {

        return new User(new Name(name), new Email(email), await Password.GeneratePassword(password, "salt"), age);
    }

    /**
     * Used for building a Existing User.
     * 
     * Commom Use Case
     * - Probably, you will want to build a user from database's table or document.
     */
    static BuildExistingUser(name: string, email: string, hashedPasswork: string, salt: string, age: number): User {
        return new User(
            new Name(name),
            new Email(email),
            new Password(hashedPasswork, salt),
            age
        );
    }

    async validatePassword (password: string): Promise<boolean> {
        return await this.password.validate(password);
    }
};
