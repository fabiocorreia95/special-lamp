import React, { InputHTMLAttributes } from 'react';

export interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const Button = (props: ButtonProps) => {
  return (
    <div>
      <button className="bg-amber-700 p-2 rounded">{props.label}</button>
    </div>
  );
};