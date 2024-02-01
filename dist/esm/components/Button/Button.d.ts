import { InputHTMLAttributes } from 'react';
export interface OwnProps extends InputHTMLAttributes<HTMLButtonElement> {
    label: string;
}
declare const ButtonWrapper: (props: OwnProps) => JSX.Element;
export default ButtonWrapper;
