"use client"

import React, {useState} from "react";
import {SectionDivider} from "@/components/shared/SectionDivider";
import {cn} from "@/utils/css";
import {FaHandPointer} from "react-icons/fa6";
import {VT323} from "next/font/google";

const VT323Font = VT323({subsets: ['latin'], weight: '400'})

const FrontSite = () => {
    return (
        <div className="absolute flex flex-col items-center justify-center h-full w-full inset-0 l p-4 [backface-visibility:hidden]">
            <h1 className="
                uppercase text-5xl transition
                group-hover:-translate-y-6"
            >
                Hello
            </h1>

            <SectionDivider className="
                absolute w-[16rem] h-1 bg-gray-800 -translate-x-1/4 opacity-0 rounded-2xl transition duration-100 m-0 block
                group-hover:opacity-100
                group-hover:translate-x-0"
            />

            <p className="
                absolute text-lg text-center font-extralight top-[8rem] opacity-0 uppercase transition
                group-hover:opacity-100
                group-hover:translate-y-2"
            >
                *Turning coffee into code<br/>one cup at a time*
            </p>

            <div
                className="
                    absolute bottom-4 left-1/2 opacity-50 animate-bounce
                    group-hover:animate-none
                ">
                <FaHandPointer/>
            </div>
        </div>
    );
}

const BackSite = () => {
    return (
        <div
            className="absolute flex flex-col items-center justify-center h-full w-full rounded-2xl inset-0 p-5 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <h2 className="uppercase text-4xl">
                Ruslan&nbsp;<span className="uppercase font-medium">Mochulskyy</span>
            </h2>

            <SectionDivider className="h-1 w-[16rem] bg-gray-800 m-0 block"/>

            <p className="font-medium">
                Fullstack Developer
            </p>

            <p className="pt-[4rem] w-full text-left">
                <span className="font-medium uppercase">Email:</span>&nbsp;mochulskyy.ruslan@gmail.com
            </p>
            <p className="w-full text-left">
                <span className="font-medium uppercase">Location:</span>&nbsp;Graz, Austria
            </p>
        </div>
    );
}

type BusinessCardProps = {
    className?: string;
    onCardFlipped?: () => void;
}

const BusinessCard = ({className, onCardFlipped}: BusinessCardProps) => {
    const [isFlipped, setFlipped] = useState(false);

    const handleClick = () => {
        if (!isFlipped) {
            setFlipped(true);

            if (onCardFlipped) {
                onCardFlipped();
            }
        }
    }

    return (
        <div
            className={cn(
                "relative container group w-[26rem] h-[14rem] bg-gradient-to-tl from-green-300/50 via-blue-500/50 to-purple-600/50 text-gray-800 rounded-2xl shadow-2xl duration-500 [transform-style:preserve-3d] transition-all",
                className, {"[transform:rotateY(180deg)]": isFlipped}, VT323Font.className
            )}
            onClick={handleClick}
        >
            <FrontSite/>
            <BackSite/>
        </div>
    );
};

export {BusinessCard};