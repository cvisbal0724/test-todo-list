import { IResponse } from "../response/IResponse";

export interface IWrite<T> {
    create(entity: T): Promise<IResponse<T>>;
    update(id: string, entity: T): Promise<IResponse<T>>;
    remove(id: string): Promise<IResponse<T>>;
}