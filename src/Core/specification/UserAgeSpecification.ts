import User from "../entity/User";
import { AbstractSpecification } from "./ISpecification";

export default class UserAgeSpecification extends AbstractSpecification<User> {
    isSatisfiedBy(entity: User): boolean {
        return entity.age >= 18;
    }
}
