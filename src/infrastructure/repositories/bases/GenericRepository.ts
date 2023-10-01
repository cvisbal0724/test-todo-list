import { IRead } from "../../../domain/interfaces/bases/IRead";
import { Http } from '../../http/Http';
import { IWrite } from "../../../domain/interfaces/bases/IWrite";
import { IResponse } from "../../../domain/interfaces/response/IResponse";

export class GenericRepository<T> implements IWrite<T>, IRead<T> {

    protected _url = '';
    constructor() {

    }

    async create(entity: T): Promise<IResponse<T>> {
        return Http.post<T>(this._url, entity);
    }

    async update(id: string, entity: T): Promise<IResponse<T>> {
        return Http.put<T>(`${this._url}/${id}`, entity);
    }

    async delete(id: string): Promise<IResponse<T>> {
        return Http.delete<T>(`${this._url}/${id}`);
    }

    async getAll(param: any): Promise<IResponse<T[]>> {
        return Http.get<T[]>(this._url, param);
    }

    async getById(id: string): Promise<IResponse<T>> {
        return Http.get<T>(`${this._url}/${id}`);
    }

}