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
                        Ad labore tempor officia dolor minim qui ullamco magna. Voluptate mollit veniam do veniam Lorem nulla pariatur velit. Laboris sint nulla sunt nulla occaecat. Velit commodo non ut. Tempor pariatur quis magna excepteur. Officia commodo nostrud reprehenderit adipisicing esse ea laboris sit.
                        <br/><br/>
                        Ad labore tempor officia dolor minim qui ullamco magna. Voluptate mollit veniam do veniam Lorem nulla pariatur velit. Laboris sint nulla sunt nulla occaecat. Velit commodo non ut. Tempor pariatur quis magna excepteur. Officia commodo nostrud reprehenderit adipisicing esse ea laboris sit.
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