import { IRead } from "../../../domain/interfaces/bases/IRead";
import { Http } from '../../../domain/http/Http';

export class ReadRepository<T> implements IRead<T> {

    _url = '';
    constructor() {

    }

    async getAll(param: any): Promise<T[]> {
        return Http.get<T[]>(this._url, param);
    }

    async getById(id: string): Promise<T> {
        return Http.get<T>(`${this._url}/id`);
    }

}