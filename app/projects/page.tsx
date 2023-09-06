import React from 'react';
import {projects} from "@/lib/data";
import {ProjectCard} from "@/components/page/projects/ProjectCard";

const Projects = () => {
    return (
        <main className="container px-6">
            <section className="flex flex-col gap-5 text-left">
                <h2 className="text-2xl text-center font-bold align-baseline mb-6">
                    Projects
                </h2>

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