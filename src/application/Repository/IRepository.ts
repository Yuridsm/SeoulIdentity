import IAggregateRoot from "../../core/entity/IAggregateRoot";

export default interface IRepository<T extends IAggregateRoot> {
    save(aggregate: T) : Promise<void>;
}