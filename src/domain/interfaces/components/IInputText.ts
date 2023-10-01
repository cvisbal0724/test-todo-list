export interface IInputText {
    label?: string;
    onChangeText: (s: any) => void;
    value?: string;
    multiline?: boolean;
    errorValidation: boolean;
    errorMessage?: string;
    ref?: any;
}