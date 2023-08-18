"use client"

import React from "react";
import {motion} from "framer-motion";
import {LinkButton} from "@/components/shared/LinkButton";

type LinkButtonAnimatedProps = {
    href: string,
    className: string,
    children: React.ReactNode,
}

export const LinkButtonAnimated = (props: LinkButtonAnimatedProps) => {
    return (
        <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
        >
            <LinkButton href={props.href} className={props.className}>
                {props.children}
            </LinkButton>
        </motion.div>
    );
}