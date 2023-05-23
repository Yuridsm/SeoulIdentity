import IAggregateRoot from "../../Core/entity/IAggregateRoot";
import IRepository from "./IRepository";

export default interface IUserRepository extends IRepository<IAggregateRoot> {
    getByEmail(email: string) : Promise<IAggregateRoot | undefined>;
}