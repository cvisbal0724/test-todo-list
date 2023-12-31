import { IOtheMethod } from "../bases/IOtheMethod";
import { IRead } from "../bases/IRead";
import { IWrite } from "../bases/IWrite";

export interface ITaskContext<T> extends IWrite<T>, IRead<T>, IOtheMethod<T> {
    
}
