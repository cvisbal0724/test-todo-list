import { IResponse } from "../../domain/interfaces/response/IResponse";
import { Http } from "../http/Http";
import { GenericRepository } from "./bases/GenericRepository";
import { IOtheMethod } from "../../domain/interfaces/bases/IOtheMethod";

export class TaskRepository<T> extends GenericRepository<T> implements IOtheMethod<T> {

    /**
     *
     */
    constructor() {
        super();    
        this._url = '/api/task.php';    
    }

    async complete(id: string, completed: boolean): Promise<IResponse<T>> {
        return Http.post<T>(`${this._url}/complete`, {id, completed});
    }

    async report<T>(): Promise<IResponse<T>> {
        return Http.get<T>(`${this._url}/report`);
    }

}