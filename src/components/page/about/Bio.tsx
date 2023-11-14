import {LottieAutoplay} from "@/src/components/shared/LottieAutoplay";
import ParagraphTitle from "@/src/components/ParagraphTitle";

export const Bio = () => {
  return (
      <section className="flex flex-col-reverse items-center justify-center mb-10 sm:mb-0 md:flex-row">
                <span className="flex flex-col w-full px-6 sm:w-[25rem]">
                    <ParagraphTitle className="md:text-left">
                        Biography
                    </ParagraphTitle>

                     <article className="text-gray-950 text-left font-extralight">
                        Hello there, I&lsquo;m a software engineer with a burning passion for code and innovation. I&lsquo;m on an exhilarating journey towards mastering the art of Full-Stack Development.
                    </article>
                </span>

          <div className="flex items-center justify-center w-[20rem] h-[20rem]">
              <LottieAutoplay src={"https://lottie.host/5be5a792-af38-4e4d-ac30-1fd4cd04ee66/iAZtJErLKq.json"}/>
          </div>
      </section>
  );
}