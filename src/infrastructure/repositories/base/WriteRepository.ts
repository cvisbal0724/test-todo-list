import { IWrite } from "../../../domain/interfaces/Base/IWrite";
import { Http } from '../../../domain/http/Http';

export class WriteRepository<T> implements IWrite<T> {

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
}