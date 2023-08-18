"use client"

import React from "react";
import {motion} from "framer-motion";
import {AnchorButton} from "@/components/shared/AnchorButton";

type AnchorButtonAnimatedProps = {
    className: string,
    children: React.ReactNode,
}

export const AnchorButtonAnimated = (props: AnchorButtonAnimatedProps) => {
    return (
        <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
        >
            <AnchorButton className={props.className}>
                {props.children}
            </AnchorButton>
        </motion.div>
    );
}