import {LottieAutoplay} from "@/components/shared/LottieAutoplay";
import {SectionDivider} from "@/components/shared/SectionDivider";
import {Skills} from "@/components/page/about/Skills";

const About = () => {
    return (
        <main className="container px-6">
            <section className="flex flex-col-reverse items-center justify-center mb-24 sm:mb-0 md:flex-row">
                <span className="flex flex-col w-full px-6 sm:w-[25rem]">
                    <h2 className="text-2xl text-center font-bold align-baseline mb-6 md:text-left">
                        Biography
                    </h2>

                     <article className="text-gray-950 text-left font-extralight">
                         Fugiat minim irure mollit amet non dolore amet ex nulla enim reprehenderit nisi. Non dolor deserunt ea proident anim. Exercitation veniam aliquip occaecat esse pariatur culpa exercitation nulla fugiat aliquip Lorem ad Lorem. Pariatur fugiat proident ex in. Proident aliqua consequat aliquip cillum nostrud irure. Irure duis aliqua minim.
                    </article>
                </span>

                <div className="flex items-center justify-center w-[22rem] h-[22rem]">
                        <LottieAutoplay src={"https://lottie.host/5be5a792-af38-4e4d-ac30-1fd4cd04ee66/iAZtJErLKq.json"}/>
                </div>
            </section>

            <SectionDivider/>

            <Skills/>
        </main>
    );
}

export default About;