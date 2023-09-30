import { STATUS } from "../../types/Status";

export interface IResponse<T> {
    status: STATUS;
    message: string;
    data: T;
}