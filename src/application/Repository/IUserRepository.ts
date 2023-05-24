import User from "../../core/entity/User";
import IRepository from "./IRepository";

export default interface IUserRepository extends IRepository<User> {
    getByEmail(email: string) : Promise<User | undefined>;
}