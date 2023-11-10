import {projects} from "@/src/data/data";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = typeof projects[number];

export const ProjectCard = ({company, description, programmingLanguages, image, link}: ProjectCardProps) => {
    return (
        <section
            className="group relative flex flex-col container bg-white max-w-[42rem] rounded-2xl border border-black/5 mb-3 h-[25rem] sm:mb-8 overflow-hidden sm:pr-8 sm:h-[20rem] last:mb-0 hover:bg-gray-100 transition">
            <div
                className="flex flex-col pt-4 pb-7 px-5 h-full sm:group-even:ml-[18rem] sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%]">
                <h3 className="text-2xl font-semibold">{company}</h3>
                <p className="text-sm mt-2 leading-relaxed text-gray-700">{description}</p>

                <ul className="flex flex-wrap gap-2 sm:mt-auto">
                    {
                        programmingLanguages.map((language, index: number) => (
                            <li key={index}
                                className="bg-gray-800/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                            >
                                {language}
                            </li>
                        ))
                    }
                </ul>
            </div>

            <Link href={link} target={"_blank"}>
                <Image
                    src={image}
                    alt={"Project I worked on"}
                    width={400}
                    height={400}
                    quality={90}
                    className="
                    absolute top-[14rem] -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition sm:top-8
                    group-even:right-[initial]
                    group-even:-left-40
                    group-hover:scale-[1.04]
                    group-hover:-translate-x-3
                    group-hover:translate-y-3
                    group-hover:-rotate-2"
                />
            </Link>
        </section>
    );
}