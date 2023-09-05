"use client"

import {skills} from "@/lib/data";
import {motion} from "framer-motion";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    hover: {
        scale: 1.05,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        }
    }),
}

export const Skills = () => {
    return (
        <section className="container mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
            <h2 className="text-2xl text-center font-bold align-baseline mb-6">
                Skills
            </h2>

            {/* TODO: Check whether gap or mb is better and adapt the project*/}
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                {skills.map((skill, index: number) => (
                    <motion.li
                        key={index}
                        className="bg-white border border-black/[0.1] rounded-xl px-5 py-2 hover:bg-gray-100"
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileHover="hover"
                        whileInView="animate"
                        viewport={{once: true}}
                        custom={index}
                    >
                        {skill.name}
                    </motion.li>
                ))}
            </ul>
        </section>
    );
}