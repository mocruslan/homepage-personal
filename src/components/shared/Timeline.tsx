"use client"

import React from "react";
import {cn} from "@/utils/css";
import {motion} from "framer-motion";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.10 * index,
        }
    }),
}

type TimelineItemProps = {
    title: string,
    role: string,
    description: string,
    sidePosition: "left" | "right",
}

type TimelineProps = {
    items: TimelineItemProps[],
}

const TimelineBox = ({title, role, description, sidePosition}: TimelineItemProps) => {
    return (
        <div className={cn(
            "mb-8 w-full text-left sm:flex sm:items-center sm:justify-between",
            {"sm:flex-row-reverse" : sidePosition === "left"},
            {"sm:flex-row" : sidePosition === "right"},
        )}
        >
            <div className="order-1 w-5/12 hidden sm:block"></div>

            <div className="bg-gray-800 shadow-xl w-8 h-8 rounded-full hidden sm:flex sm:items-center sm:justify-center sm:order-1">
                <div className="mx-auto font-semibold text-lg text-white"></div>
            </div>

            <div className="bg-white border border-black/[0.1] rounded-xl shadow-xl px-6 py-4 sm:w-5/12 sm:order-1 hover:scale-105 hover:bg-gray-100 transition">
                <h3 className="mb-3 font-bold text-gray-900 text-xl">{title}</h3>
                <h4 className="mb-1 font-normal text-gray-850 text-sm">{role}</h4>

                <p className="font-light text-sm text-gray-800">{description}</p>
            </div>
        </div>
    );
}

const CenterLine = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}

            className="absolute border border-gray-700/10 h-full left-1/2 sm:block"
        />
    );
}


export const Timeline = (props: TimelineProps) => {
    return (
        <div className="container">
            <div className="relative overflow-hidden p-10 h-full">
                <CenterLine/>

                {
                    props.items.map((item: TimelineItemProps, index: number) => (
                        <React.Fragment key={index}>
                            <motion.div
                                variants={fadeInAnimationVariants}
                                initial="initial"
                                whileInView="animate"
                                viewport={{once: true}}
                                custom={index}

                                className="relative z-10"
                            >
                                <TimelineBox
                                    {...item}
                                />
                            </motion.div>
                        </React.Fragment>
                    ))
                }
            </div>
        </div>
    );
}