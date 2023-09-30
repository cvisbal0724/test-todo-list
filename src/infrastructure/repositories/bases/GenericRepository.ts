import { IRead } from "../../../domain/interfaces/bases/IRead";
import { Http } from '../../http/Http';
import { IWrite } from "../../../domain/interfaces/bases/IWrite";

export class GenericRepository<T> implements IWrite<T>, IRead<T> {

    _url = '';
    constructor() {

    }

    async create(entity: T): Promise<T> {
        return Http.post<T>(this._url, entity);
    }

    async update(id: string, entity: T): Promise<T> {
        return Http.put<T>(`${this._url}/id`, entity);
    }

    async delete(id: string): Promise<T> {
        return Http.delete<T>(`${this._url}/id`);
    }

    async getAll(param: any): Promise<T[]> {
        return Http.get<T[]>(this._url, param);
    }

    async getById(id: string): Promise<T> {
        return Http.get<T>(`${this._url}/id`);
    }

}