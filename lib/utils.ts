import {twMerge} from "tailwind-merge";
import {ClassValue, clsx} from "clsx";

/**
 * This utility function can be used to merge tailwind classes and return a string.
 * */
export function cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs));
}