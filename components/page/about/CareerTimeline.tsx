import {careerTimelineItems} from "@/lib/data";
import {Timeline} from "@/components/shared/Timeline";
import ParagraphTitle from "@/components/ParagraphTitle";

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