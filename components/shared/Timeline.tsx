"use client"

import {cn} from "@/lib/utils";
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

interface TimelineItemProps {
    title: string,
    role: string,
    description: string,
    sidePosition: "left" | "right",
}

interface TimelineProps {
    items: TimelineItemProps[],
}

const TimelineBox = (props: TimelineItemProps) => {
    return (
        <div className={cn(
            "flex items-center justify-between mb-8 w-full text-left",
            {"flex-row-reverse" : props.sidePosition === "left"},
            {"flex-row" : props.sidePosition === "right"},
        )}
        >
            <div className="order-1 w-5/12"></div>

            <div className="flex items-center justify-center order-1 z-20 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <div className="mx-auto font-semibold text-lg text-white"></div>
            </div>

            <div className="order-1 bg-white border border-black/[0.1] rounded-xl shadow-xl w-5/12 px-6 py-4 hover:scale-105 hover:bg-gray-100 transition">
                <h3 className="mb-3 font-bold text-gray-900 text-xl">{props.title}</h3>
                <h4 className="mb-1 font-normal text-gray-850 text-sm">{props.role}</h4>

                <p className="font-light text-sm text-gray-800">{props.description}</p>
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

            className="absolute border border-gray-700/10 h-full left-1/2"
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
                        <motion.div
                            key={index}
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{once: true}}
                            custom={index}
                        >
                            <TimelineBox
                                title={item.title}
                                role={item.role}
                                description={item.description}
                                sidePosition={item.sidePosition}
                            />
                        </motion.div>
                    ))
                }
            </div>
        </div>
    );
}