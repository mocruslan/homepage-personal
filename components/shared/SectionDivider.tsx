import {cn} from "@/utils/css";

interface SectionDividerProps {
    className?: string;
}

export const SectionDivider = ({className}: SectionDividerProps) => {
    // TODO: Make section divider more dynamic (use props to change horizontal or vertical alignment)
    return (
        <div className={cn("container bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block", className)}/>
    );
}