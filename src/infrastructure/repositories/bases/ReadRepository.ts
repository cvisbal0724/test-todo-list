import { IRead } from "../../../domain/interfaces/bases/IRead";
import { IResponse } from "../../../domain/interfaces/response/IResponse";
import { Http } from '../../http/Http';

export class ReadRepository<T> implements IRead<T> {

    _url = '';
    constructor() {

    }

    async getAll(param: any): Promise<IResponse<T[]>> {
        return Http.get<T[]>(this._url, param);
    }

    async getById(id: string): Promise<IResponse<T>> {
        return Http.get<T>(`${this._url}/id`);
    }

}