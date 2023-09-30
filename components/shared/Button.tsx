import React from "react";
import {cn} from "@/utils/css";

type ButtonProps = {
    className?: string;
    type?: "button" | "submit" | "reset";
    onClickAction?: () => void;
    children?: React.ReactNode;
}

export const Button = ({className, type, onClickAction, children}: ButtonProps) => {
    return (
        <button
            className={cn("flex items-center gap-2 bg-gray-900 text-white px-7 py-2 rounded-full whitespace-nowrap border border-black/10  cursor-pointer outline-none  hover:scale-110 hover:bg-gray-950 active:scale-105 transition", className)}
            type={type}
            onClick={onClickAction ? onClickAction : () => {}}
        >
            {children}
        </button>
    );
}
