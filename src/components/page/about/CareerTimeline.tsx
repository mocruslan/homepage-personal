import {careerTimelineItems} from "@/src/data/data";
import {Timeline} from "@/src/components/shared/Timeline";
import ParagraphTitle from "@/src/components/ParagraphTitle";

export const CareerTimeline = () => {
    return (
        <section className="container mb-24 text-center sm:mb-0 md:flex-row">
            <ParagraphTitle>
                Experience
            </ParagraphTitle>

            <Timeline items={careerTimelineItems}/>
        </section>
    );
}