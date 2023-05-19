import User from "../../../Core/Entity/User";
import IUserRepository from "../../../application/Repository/IUserRepository";

export default class UserRepositoryInMemory implements IUserRepository {
    
    users: User[] = [];

    async getByEmail(email: string): Promise<User | undefined> {
        return this.users.find((o: User) => o.email === email);
    }

    async save(aggregate: User): Promise<void> {
        this.users.push(aggregate);
    }
}