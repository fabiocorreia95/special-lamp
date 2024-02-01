import React from 'react';

export interface ButtonProps{
    label: string;
}

const Button = ({label}: ButtonProps) => {
    // btn class added 👇👇
    return <button className="bg-amber-700 p-2 rounded">{label}</button>
}

export default Button;