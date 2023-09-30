import { STATUS } from "../../types/Status";

export interface IResponse<T> {
    success: boolean;
    message: string;
    data: T;
}