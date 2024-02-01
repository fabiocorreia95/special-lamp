import { InputHTMLAttributes } from 'react';

interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement> {
    label: string;
}
declare const Button: (props: ButtonProps) => JSX.Element;

export { Button, ButtonProps };
