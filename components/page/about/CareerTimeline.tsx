import {careerTimelineItems} from "@/lib/data";
import {Timeline} from "@/components/shared/Timeline";

export const CareerTimeline = () => {
    return (
        <section className="container mb-24 text-center sm:mb-0 md:flex-row">
            <h2 className="text-2xl text-center font-bold align-baseline mb-6">
                Experience
            </h2>

            <Timeline items={careerTimelineItems}/>
        </section>
    );
}