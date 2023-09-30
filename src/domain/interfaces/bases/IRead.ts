import { IResponse } from "../response/IResponse";

export interface IRead<T> {
    getAll(param: any): Promise<IResponse<T[]>>;
    getById(id: string): Promise<IResponse<T>>;
}