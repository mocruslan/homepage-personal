import {careerTimelineItems} from "@/lib/data";
import {Timeline} from "@/components/shared/Timeline";

export const CareerTimeline = () => {
    return (
        <section className="container mb-24 sm:mb-0 md:flex-row">
            <Timeline items={careerTimelineItems}/>
        </section>
    );
}