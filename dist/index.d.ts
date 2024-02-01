import { InputHTMLAttributes } from 'react';

interface OwnProps extends InputHTMLAttributes<HTMLButtonElement> {
    label: string;
}
declare const ButtonWrapper: (props: OwnProps) => JSX.Element;

export { ButtonWrapper as Button };
