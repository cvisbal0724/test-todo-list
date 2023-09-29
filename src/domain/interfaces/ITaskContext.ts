import { IRead } from "./Base/IRead";
import { IWrite } from "./Base/IWrite";

export interface ITaskContext<T> extends IWrite<T>, IRead<T> {
    
}
