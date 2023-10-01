export interface ISearch {
    label?: string;
    onChangeText: (s: any) => void;
    onCleanText?: () => void;
    value?: string;
    placeholder?: string;
}