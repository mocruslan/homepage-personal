import {SectionDivider} from "@/components/shared/SectionDivider";
import {Skills} from "@/components/page/about/Skills";
import {Bio} from "@/components/page/about/Bio";
import {CareerTimeline} from "@/components/page/about/CareerTimeline";

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