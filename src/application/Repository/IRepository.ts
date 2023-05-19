import IAggregateRoot from "../../Core/Entity/IAggregateRoot";

export default interface IRepository<T extends IAggregateRoot> {
    save(aggregate: T) : Promise<void>;
}