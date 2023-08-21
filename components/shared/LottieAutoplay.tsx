"use client"

import {Player} from "@lottiefiles/react-lottie-player";
import React from "react";

type LottieAutoplayProps = {
    src: string;
    style?: React.CSSProperties;
}

export const LottieAutoplay = (props: LottieAutoplayProps) => {
    return (
        <Player
            autoplay={true}
            loop={true}
            src={props.src}
            style={props.style ?? {height: '100%', width: '100%'}}
        />
    );
}