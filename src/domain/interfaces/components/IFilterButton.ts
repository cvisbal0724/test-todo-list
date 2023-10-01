import { IButton } from "./IButton";
import { IValue } from "./IValue";

export interface IFilterButton extends IButton {
    value?: string;
    default?: string;
    items?: IValue[];
}