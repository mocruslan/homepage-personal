"use client"

import React, {useState} from "react";
import {SectionDivider} from "@/components/shared/SectionDivider";
import {cn} from "@/lib/utils";
import {FaHandPointer} from "react-icons/fa6";
import {VT323} from "next/font/google";

const VT323Font = VT323({subsets: ['latin'], weight: '400'})


const FrontSite = () => {
    return (
        <div className="absolute flex flex-col items-center justify-center h-full w-full inset-0 l p-4 text-orange-300"
        >
            {/*<Image*/}
            {/*    src={"/img/profile-picture.png"}*/}
            {/*    alt={"Business Card Image"}*/}
            {/*    width={200}*/}
            {/*    height={200}*/}
            {/*    className="absolute top-0 left-0"*/}
            {/*/>*/}

            <h1 className="
                uppercase text-5xl transition
                group-hover:-translate-y-6
                "
            >
                Hello
            </h1>

            <SectionDivider className="
                absolute w-[16rem] h-1 bg-orange-300 -translate-x-1/4 opacity-0 transition duration-100 block m-0
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
        <div className="absolute flex flex-col items-center justify-center h-full w-full bg-gray-700 rounded-2xl inset-0 p-5 text-orange-300 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <h2 className="uppercase text-4xl">
                Ruslan&nbsp;<span className="uppercase font-semibold">Mochulskyy</span>
            </h2>

            <SectionDivider className="h-[2px] w-[16rem] bg-orange-300 m-0 block"/>

            <p className="font-semibold">
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


const BusinessCard = () => {
    // https://codepen.io/jboeijenga/pen/VwGPmd
    const [isFlipped, setFlipped] = useState(false as boolean);

    return (
        <div
            className={cn(
                "relative container group w-[26rem] h-[14rem] bg-gray-700 rounded-2xl shadow-2xl duration-500 [transform-style:preserve-3d] transition-all",
                {"[transform:rotateY(180deg)]": isFlipped}, VT323Font.className
            )}
            onClick={() => setFlipped(!isFlipped)}
        >
            <FrontSite/>
            <BackSite/>
        </div>
    );
};

export {BusinessCard};