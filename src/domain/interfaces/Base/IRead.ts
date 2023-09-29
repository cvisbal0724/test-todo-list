export interface IRead<T> {
    getAll(param: any): Promise<T[]>;
    getById(id: string): Promise<T>;
}