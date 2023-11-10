import React from 'react';
import {projects} from "@/src/data/data";
import {ProjectCard} from "@/src/components/page/projects/ProjectCard";
import ParagraphTitle from "@/src/components/ParagraphTitle";

const Projects = () => {
    return (
        <main className="container px-6">
            <section className="flex flex-col gap-5 text-left">
                <article className="container text-center align-baseline mb-10">
                    <ParagraphTitle>
                        Projects
                    </ParagraphTitle>

                    <p className="mx-auto text-left font-light w-full px-6 sm:w-[38rem]">
                        Check out my projects page, where you&aposll find practical apps and tools I&aposve built. It&aposs simple and straightforward – no fluff, just a bunch of cool stuff I made while learning and experimenting with code. Browse around, see what I&aposve been up to, and maybe you&aposll get some ideas for your own projects. Have fun exploring!
                    </p>
                </article>

                {
                    projects.map((project, index: number) => (
                        <React.Fragment key={index}>
                            <ProjectCard {...project}/>
                        </React.Fragment>
                    ))
                }
            </section>
        </main>
    )
}

export default Projects;