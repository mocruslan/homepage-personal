import Image from 'next/image'
import {LinkButtonAnimated} from "@/components/shared/LinkButtonAnimated";
import {BiArrowToRight, BiDownload} from "react-icons/bi";
import {AnchorButtonAnimated} from "@/components/shared/AnchorButtonAnimated";
import {BsLinkedin} from "react-icons/bs";
import {FaGithubSquare} from "react-icons/fa";


export default function Home() {
    return (
        <main className="container mx-auto">
            <section className="flex flex-col lg:flex-row items-center justify-center">
                <div className="flex items-center justify-center">
                    <Image
                        src={"/img/profile-picture.png"}
                        alt={"Ruslan's profile picture"}
                        width={200}
                        height={200}
                        priority={true}
                        quality={90}
                        className="h-80 w-80 object-cover sm:h-[25rem] sm:w-[25rem] lg:h-[30rem] lg:w-[30rem]"
                    />
                </div>

                <div className="flex flex-col items-start justify-start mx-10 sm:mx-20">
                    <span className="flex flex-col  sm:max-w-md">
                        <h1 className="text-left text-2xl sm:text-4xl font-bold leading-snug align-baseline">
                            Turning Vision into <br/> reality with code <br/> and design.
                        </h1>

                        <span className="text-gray-950 text-left font-extralight leading-snug align-baseline mt-4">
                            A full-stack developer with a passion for building beautiful, functional, and accessible websites and applications.
                        </span>
                    </span>

                    <div className="flex items-start justify-start gap-2 text-sm">
                        <LinkButtonAnimated
                            href={"/"}
                            className="group flex items-center gap-2 bg-gray-900 text-white px-7 py-2 rounded-full outline-none  hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                        >
                            Contact me here {" "} <BiArrowToRight className="opacity-70 group-hover:translate-x-1 transition"/>
                        </LinkButtonAnimated>

                        <AnchorButtonAnimated
                            className="group flex items-center gap-2 bg-white px-7 py-2 rounded-full outline-none hover:scale-110 active:scale-105 transition"
                        >
                            Download CV {" "} <BiDownload className="opacity-70 group-hover:translate-y-1 transition"/>
                        </AnchorButtonAnimated>

                        <AnchorButtonAnimated
                            className="group flex items-center gap-2 grow-0 bg-white text-gray-700 text-[1.2rem] p-2 rounded-full outline-none hover:scale-110 active:scale-105 transition"
                        >
                            <BsLinkedin/>
                        </AnchorButtonAnimated>

                        <AnchorButtonAnimated
                            className="group flex items-center gap-2 grow-0 bg-white text-gray-700 text-[1.2rem] p-2 rounded-full outline-none hover:scale-110 active:scale-105 transition"
                        >
                            <FaGithubSquare/>
                        </AnchorButtonAnimated>
                    </div>
                </div>
            </section>
        </main>
    )
}
