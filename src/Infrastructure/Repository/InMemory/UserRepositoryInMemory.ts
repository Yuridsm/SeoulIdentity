import User from "../../../core/entity/User";
import IUserRepository from "../../../application/repository/IUserRepository";

export default class UserRepositoryInMemory implements IUserRepository {
    
    users: User[] = [];

    async getByEmail(email: string): Promise<User | undefined> {
        return this.users.find((o: User) => o.email.getValue() === email);
    }

    async save(aggregate: User): Promise<void> {
        this.users.push(aggregate);
    }
};