import IAggregateRoot from "./IAggregateRoot";

export default class User implements IAggregateRoot {
    constructor(
        readonly name: string, 
        readonly email: string, 
        readonly password: string, 
        readonly age: number) {
        
            // Business Rule 01
        if (name.split(" ").length < 2) throw new Error("Invalid Name");

        // Business Rule 02
        if (!String(email).toLowerCase().match(/^[\w-]+(\.[\w-]+)*@([a-zA-Z0-9-]+\.)+[a-zA-z]{2,}$/)) throw new Error("Invalid E-mail");

        // Business Rule03
        if (password.length < 8) throw new Error("Invalid Password");

        // Business Rule 04
        if (age < 18) throw new Error("Invalid Age");
    }
}
