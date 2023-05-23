export interface ISpecification<T> {
    isSatisfiedBy(entity: T): boolean;
    and (other: ISpecification<T>): ISpecification<T>;
    or (other: ISpecification<T>): ISpecification<T>;
    not(other: ISpecification<T>): ISpecification<T>;
}

export abstract class AbstractSpecification<T> implements ISpecification<T> {
    abstract isSatisfiedBy(entity: T): boolean;
    
    and(other: ISpecification<T>): ISpecification<T> {
        return new AndSpecification(this, other);
    }

    or(other: ISpecification<T>): ISpecification<T> {
        return new OrSpecification(this, other);
    }

    not(other: ISpecification<T>): ISpecification<T> {
        return new NotSpecification(other);
    }
}

export class AndSpecification<T> extends AbstractSpecification<T> {
    private left: ISpecification<T>;
    private right: ISpecification<T>;
    
    constructor(left: ISpecification<T>, right: ISpecification<T>) {
        super();
        this.left = left;
        this.right = right;
    }

    isSatisfiedBy(entity: T): boolean {
        return this.left.isSatisfiedBy(entity) && this.right.isSatisfiedBy(entity);
    }
}

export class OrSpecification<T> extends AbstractSpecification<T> {
    private left: ISpecification<T>;
    private right: ISpecification<T>;
    
    constructor (left: ISpecification<T>, right: ISpecification<T>) {
        super();
        this.left = left;
        this.right = right;
    }

    isSatisfiedBy(entity: T): boolean {
        return this.left.isSatisfiedBy(entity) || this.right.isSatisfiedBy(entity);
    }
}

export class NotSpecification<T> extends AbstractSpecification<T> {
    private internalSpec: ISpecification<T>;
    
    constructor(specification: ISpecification<T>) {
        super();
        this.internalSpec = specification;
    }

    isSatisfiedBy(entity: T): boolean {
        return !this.internalSpec.isSatisfiedBy(entity);
    }
}