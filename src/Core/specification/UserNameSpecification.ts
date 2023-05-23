import User from "../entity/User";
import { AbstractSpecification } from "./ISpecification";

export default class UserNameSpecification extends AbstractSpecification<User> {
    isSatisfiedBy(entity: User): boolean {
        return entity.name.split(" ").length >= 2;
    }
}
