import Image from 'next/image'
import {BiArrowToRight, BiDownload} from "react-icons/bi";
import {BsLinkedin} from "react-icons/bs";
import {FaGithubSquare} from "react-icons/fa";
import {LinkButton} from "@/components/shared/LinkButton";


const Home = () => {
    return (
        <main className="container mx-auto px-6">
            <section className="flex flex-col items-center justify-center lg:flex-row">
                <div className="flex items-center justify-center">
                    <Image
                        src={"/img/profile-picture.png"}
                        alt={"Ruslan's profile picture"}
                        width={300}
                        height={300}
                        priority={true}
                        quality={90}
                        className="h-80 w-80 object-cover sm:h-[25rem] sm:w-[25rem] lg:h-[30rem] lg:w-[30rem]"
                    />
                </div>

                <div className="flex flex-col items-start justify-start gap-6">
                    <span className="flex flex-col sm:max-w-md">
                        <h1 className="text-left text-2xl sm:text-4xl font-bold leading-snug align-baseline">
                            Turning Vision into <br/> reality with code <br/> and design.
                        </h1>

                        <span className="text-gray-950 text-left font-extralight leading-snug align-baseline mt-4">
                            A full-stack developer with a passion for building beautiful, functional, and accessible websites and applications.
                        </span>
                    </span>

                    <div className="flex items-center justify-center gap-3 text-[0.6rem] sm:text-sm">
                        <LinkButton
                            href={"/"}
                            className="group flex items-center gap-2 bg-gray-900 text-white px-7 py-2 rounded-full whitespace-nowrap border border-black/10  cursor-pointer outline-none  hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                        >
                            Contact me here {" "} <BiArrowToRight className="opacity-70 group-hover:translate-x-2 transition"/>
                        </LinkButton>

                        <a
                            href={"/file/CV.pdf"} download
                            className="group flex items-center gap-2 bg-white px-7 py-2 rounded-full whitespace-nowrap border border-black/10 cursor-pointer outline-none hover:scale-110 hover:text-gray-950 active:scale-105 transition "
                        >
                            Download CV {" "} <BiDownload className="opacity-70 group-hover:translate-y-1 transition"/>
                        </a>

                        <a
                            href={"https://www.linkedin.com/in/ruslan-mochulskyy/"} target={"_blank"}
                            className="group flex items-center gap-2 grow-0 bg-white text-gray-700 text-[1.2rem] p-2 rounded-full border border-black/10  cursor-pointer outline-none hover:scale-110 hover:text-gray-950 active:scale-105 transition"
                        >
                            <BsLinkedin/>
                        </a>

                        <a
                            href={"https://github.com/mocruslan"} target={"_blank"}
                            className="group flex items-center gap-2 grow-0 bg-white text-gray-700 text-[1.2rem] p-2 rounded-full border border-black/10  cursor-pointer outline-none hover:scale-110 hover:text-gray-950 active:scale-105 transition"
                        >
                            <FaGithubSquare/>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home;