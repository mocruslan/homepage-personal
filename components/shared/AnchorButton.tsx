import React from "react";

type AnchorButtonProps = {
    className: string,
    children: React.ReactNode,
}

export const AnchorButton = (props: AnchorButtonProps) => {
    return (
        <a className={props.className}>
            {props.children}
        </a>
    );
}