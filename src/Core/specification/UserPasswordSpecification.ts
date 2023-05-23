import User from "../entity/User";
import { AbstractSpecification } from "./ISpecification";

export default class UserPasswordSpecification extends AbstractSpecification<User> {
    isSatisfiedBy(entity: User): boolean {
        return entity.password.length > 7;
    }
}
