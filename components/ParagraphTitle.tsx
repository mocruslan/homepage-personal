import React from "react";
import {cn} from "@/utils/css";

type TitleProps = {
    className?: string,
    children: React.ReactNode,
}

const ParagraphTitle = ({className, children}: TitleProps) => {
    return (
        <h2 className={cn("text-2xl text-center font-bold align-baseline mb-6", className)}>
            {children}
        </h2>
    );
}

export default ParagraphTitle;