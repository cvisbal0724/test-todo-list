import { IResponse } from "../response/IResponse";

export interface IOtheMethod<T> {
    complete(id: string, completed: boolean): Promise<IResponse<T>>;
}