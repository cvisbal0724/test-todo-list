import { IButton } from "./IButton";
import { IValue } from "./IValue";

export interface IFilterButton extends IButton {
    value?: string;
    active?: boolean;
    items?: IValue[];
}