"use client"

import React from "react";
import {cn} from "@/src/utils/css";
import {experimental_useFormStatus as useFormStatus} from 'react-dom'

type SubmitButtonProps = {
    children: React.ReactNode;
    className?: string;
    onClickAction?: () => void;
}

export const SubmitButton = ({children, className, onClickAction}: SubmitButtonProps) => {
    const {pending} = useFormStatus();

    return (
        <button
            className={cn("flex items-center gap-2 bg-gray-900 text-white px-7 py-2 rounded-full whitespace-nowrap border border-black/10  cursor-pointer outline-none  hover:scale-110 hover:bg-gray-950 active:scale-105 transition", className)}
            type="submit"
            onClick={onClickAction ? onClickAction : () => {
            }}
        >
            {pending ? (
                <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
            ) : (
                <>
                    {children}
                </>
            )}
        </button>
    );
}
