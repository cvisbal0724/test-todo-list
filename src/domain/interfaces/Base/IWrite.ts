export interface IWrite<T> {
    create(entity: T): Promise<T>;
    update(id: string, entity: T): Promise<T>;
    delete(id: string): Promise<T>;
}