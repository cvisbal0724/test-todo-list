export interface IDatePicker {
    label?: string;
    onChangeDate: (s: any) => void;
    value: Date;
}