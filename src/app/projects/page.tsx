import React from 'react';
import {ProjectCard} from "@/src/components/page/projects/ProjectCard";
import ParagraphTitle from "@/src/components/ParagraphTitle";
import {projectsData} from "@/src/data/projects/ProjectsData";

const Projects = () => {
    return (
        <main className="container px-6">
            <section className="flex flex-col gap-5 text-left">
                <article className="container text-center align-baseline mb-10">
                    <ParagraphTitle>
                        Projects
                    </ParagraphTitle>

                    <p className="mx-auto text-left font-light w-full px-6 sm:w-[38rem]">
                        Check out my projects page, where you&lsquo;ll find practical apps and tools I&lsquo;ve built. It&lsquo;s simple and straightforward – no fluff, just a bunch of cool stuff I made while learning and experimenting with code. Browse around, see what I&lsquo;ve been up to, and maybe you&lsquo;ll get some ideas for your own projects. Have fun exploring!
                    </p>
                </article>

                {
                    projectsData.map((project, index: number) => (
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