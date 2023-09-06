import {FaAws, FaC, FaCss3, FaGolang, FaHtml5, FaJava, FaJs, FaNodeJs, FaPhp, FaPython} from "react-icons/fa6";
import {FaReact} from "react-icons/fa";
import {BiLogoMongodb, BiLogoTypescript} from "react-icons/bi";
import {SiAmazondynamodb, SiMariadb} from "react-icons/si";
import {TbBrandNextjs} from "react-icons/tb";
import PlaceHolderWebsite1 from "@/public/img/placeholder-website-1.png";
import PlaceHolderWebsite2 from "@/public/img/placeholder-website-2.png";
import PlaceHolderWebsite3 from "@/public/img/placeholder-website-3.png";

export const navLinks = [
    {
        name: 'Home',
        href: '/',
    },
    {
        name: 'About',
        href: '/about',
    },
    {
        name: 'Projects',
        href: '/projects',
    },
    {
        name: 'Contact',
        href: '/experience',
    },
] as const;


export const skills = [
    {
        name: 'C',
        icon: FaC,
    },
    {
        name: 'PHP',
        icon: FaPhp,
    },
    {
        name: 'JavaScript',
        icon: FaJs,
    },
    {
        name: 'TypeScript',
        icon: BiLogoTypescript,
    },
    {
        name: 'Golang',
        icon: FaGolang,
    },
    {
        name: 'Python',
        icon: FaPython,
    },
    {
        name: 'Java',
        icon: FaJava,
    },
    {
        name: 'React',
        icon: FaReact,
    },
    {
        name: 'Next.js',
        icon: TbBrandNextjs,
    },
    {
        name: 'AWS',
        icon: FaAws,
    },
    {
        name: 'HTML',
        icon: FaHtml5,
    },
    {
        name: 'CSS',
        icon: FaCss3,
    },
    {
        name: 'MongoDB',
        icon: BiLogoMongodb,
    },
    {
        name: 'MariaDB',
        icon: SiMariadb,
    },
    {
        name: 'DynamoDB',
        icon: SiAmazondynamodb,
    },
    {
        name: 'Node.js',
        icon: FaNodeJs,
    },
] as const;

export const careerTimelineItems = [
    {
        title: 'Sample Company',
        role: 'Software Engineer',
        description: "Nulla proident deserunt labore sint nostrud minim ipsum sunt ut consequat dolor in commodo veniam sunt. Irure aliquip quis sint consequat dolore nisi anim nisi occaecat veniam aliqua ullamco quis. Consequat commodo ipsum dolore do sint. Anim deserunt officia ipsum quis id nulla sint reprehenderit laboris eiusmod sunt.",
        sidePosition: "left" as "left" | "right",
    },
    {
        title: 'Sample Company',
        role: 'Software Engineer',
        description: "Nulla proident deserunt labore sint nostrud minim ipsum sunt ut consequat dolor in commodo veniam sunt. Irure aliquip quis sint consequat dolore nisi anim nisi occaecat veniam aliqua ullamco quis. Consequat commodo ipsum dolore do sint. Anim deserunt officia ipsum quis id nulla sint reprehenderit laboris eiusmod sunt.",
        sidePosition: "right" as "left" | "right",
    },
    {
        title: 'Sample Company',
        role: 'Software Engineer',
        description: "Nulla proident deserunt labore sint nostrud minim ipsum sunt ut consequat dolor in commodo veniam sunt. Irure aliquip quis sint consequat dolore nisi anim nisi occaecat veniam aliqua ullamco quis. Consequat commodo ipsum dolore do sint. Anim deserunt officia ipsum quis id nulla sint reprehenderit laboris eiusmod sunt.",
        sidePosition: "left" as "left" | "right",
    },
    {
        title: 'Sample Company',
        role: 'Software Engineer',
        description: "Nulla proident deserunt labore sint nostrud minim ipsum sunt ut consequat dolor in commodo veniam sunt. Irure aliquip quis sint consequat dolore nisi anim nisi occaecat veniam aliqua ullamco quis. Consequat commodo ipsum dolore do sint. Anim deserunt officia ipsum quis id nulla sint reprehenderit laboris eiusmod sunt.",
        sidePosition: "right" as "left" | "right",
    },
    {
        title: 'Sample Company',
        role: 'Software Engineer',
        description: "Nulla proident deserunt labore sint nostrud minim ipsum sunt ut consequat dolor in commodo veniam sunt. Irure aliquip quis sint consequat dolore nisi anim nisi occaecat veniam aliqua ullamco quis. Consequat commodo ipsum dolore do sint. Anim deserunt officia ipsum quis id nulla sint reprehenderit laboris eiusmod sunt.",
        sidePosition: "left" as "left" | "right",
    },
];

export const projects = [
    {
        title: 'Sample Project',
        description: "Nulla proident deserunt labore sint nostrud minim ipsum sunt ut consequat dolor in commodo veniam sunt. Irure aliquip quis sint consequat dolore nisi anim nisi occaecat veniam aliqua ullamco quis.",
        programmingLanguages: [
            "C",
            "PHP",
            "JavaScript",
        ],
        image: PlaceHolderWebsite1,
        link: "https://google.com",
    },
    {
        title: 'Sample Project',
        description: "Nulla proident deserunt labore sint nostrud minim ipsum sunt ut consequat dolor in commodo veniam sunt. Irure aliquip quis sint consequat dolore nisi anim nisi occaecat veniam aliqua ullamco quis.",
        programmingLanguages: [
            "C",
            "PHP",
            "JavaScript",
        ],
        image: PlaceHolderWebsite2,
        link: "https://google.com",
    },
    {
        title: 'Sample Project',
        description: "Nulla proident deserunt labore sint nostrud minim ipsum sunt ut consequat dolor in commodo veniam sunt. Irure aliquip quis sint consequat dolore nisi anim nisi occaecat veniam aliqua ullamco quis.",
        programmingLanguages: [
            "C",
            "PHP",
            "JavaScript",
        ],
        image: PlaceHolderWebsite3,
        link: "https://google.com",
    },
] as const;