import React from "react";


export interface ButtonProps{
    label: string;
}

const Button = ( {label}: ButtonProps) => {
    return (
        <button className="p-4 bg-amber-600">
            {label}
        </button>
    );
}

export default Button;
