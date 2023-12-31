"use client"

import {motion} from "framer-motion";
import ParagraphTitle from "@/src/components/ParagraphTitle";
import {skillsData} from "@/src/data/about/SkillsData";

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
            <ParagraphTitle>
                Skills
            </ParagraphTitle>

            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                {skillsData.map((skill, index: number) => (
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