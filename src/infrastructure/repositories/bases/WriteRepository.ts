import { IWrite } from "../../../domain/interfaces/bases/IWrite";
import { IResponse } from "../../../domain/interfaces/response/IResponse";
import { Http } from '../../http/Http';

export class WriteRepository<T> implements IWrite<T> {

    _url = '';
    constructor() {

    }

    async create(entity: T): Promise<IResponse<T>> {
        return Http.post<T>(this._url, entity);
    }

    async update(id: string, entity: T): Promise<IResponse<T>> {
        return Http.put<T>(`${this._url}/id`, entity);
    }

    async remove(id: string): Promise<IResponse<T>> {
        return Http.delete<T>(`${this._url}/id`);
    }
}