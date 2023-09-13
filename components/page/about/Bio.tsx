import {LottieAutoplay} from "@/components/shared/LottieAutoplay";
import ParagraphTitle from "@/components/ParagraphTitle";

export const Bio = () => {
  return (
      <section className="flex flex-col-reverse items-center justify-center mb-24 sm:mb-0 md:flex-row">
                <span className="flex flex-col w-full px-6 sm:w-[25rem]">
                    <ParagraphTitle className="md:text-left">
                        Biography
                    </ParagraphTitle>

                     <article className="text-gray-950 text-left font-extralight">
                         Fugiat minim irure mollit amet non dolore amet ex nulla enim reprehenderit nisi. Non dolor deserunt ea proident anim. Exercitation veniam aliquip occaecat esse pariatur culpa exercitation nulla fugiat aliquip Lorem ad Lorem. Pariatur fugiat proident ex in. Proident aliqua consequat aliquip cillum nostrud irure. Irure duis aliqua minim.
                    </article>
                </span>

          <div className="flex items-center justify-center w-[22rem] h-[22rem]">
              <LottieAutoplay src={"https://lottie.host/5be5a792-af38-4e4d-ac30-1fd4cd04ee66/iAZtJErLKq.json"}/>
          </div>
      </section>
  );
}