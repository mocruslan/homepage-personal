import {LottieAutoplay} from "@/components/shared/LottieAutoplay";

const About = () => {
    return (
        <main className="container mx-auto px-6">
            <section className="flex flex-col-reverse items-center justify-center md:flex-row">
                <span className="flex flex-col gap-3 w-full px-6 text-left sm:w-[25rem]">
                    <h2 className="text-2xl font-bold align-baseline">
                        Biography
                    </h2>

                     <article className="text-gray-950 font-extralight">
                         Fugiat minim irure mollit amet non dolore amet ex nulla enim reprehenderit nisi. Non dolor deserunt ea proident anim. Exercitation veniam aliquip occaecat esse pariatur culpa exercitation nulla fugiat aliquip Lorem ad Lorem. Pariatur fugiat proident ex in. Proident aliqua consequat aliquip cillum nostrud irure. Irure duis aliqua minim.
                    </article>
                </span>

                <div className="flex items-center justify-center w-[22rem] h-[22rem]">
                        <LottieAutoplay src={"https://lottie.host/5be5a792-af38-4e4d-ac30-1fd4cd04ee66/iAZtJErLKq.json"}/>
                </div>
            </section>
        </main>
    );
}

export default About;