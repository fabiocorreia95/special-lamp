import { InputHTMLAttributes } from 'react';
export interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement> {
    label: string;
}
export declare const Button: (props: ButtonProps) => JSX.Element;
