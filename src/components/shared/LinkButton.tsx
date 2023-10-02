import React from "react";
import Link from "next/link";

type LinkButtonProps = {
    href: string,
    className: string,
    children: React.ReactNode,
}

export const LinkButton = (props: LinkButtonProps) => {
    return (
        <Link
            href={props.href}
            className={props.className}
        >
            {props.children}
        </Link>
    );
}