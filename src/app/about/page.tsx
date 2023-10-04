import {SectionDivider} from "@/src/components/shared/SectionDivider";
import {Skills} from "@/src/components/page/about/Skills";
import {Bio} from "@/src/components/page/about/Bio";
import {CareerTimeline} from "@/src/components/page/about/CareerTimeline";

const About = () => {
    return (
        <main className="container px-6">
            <Bio/>

            <SectionDivider/>

            <Skills/>

            <CareerTimeline/>
        </main>
    );
}

export default About;