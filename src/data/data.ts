import {FaAws, FaC, FaCss3, FaGolang, FaHtml5, FaJava, FaJs, FaNodeJs, FaPhp, FaPython} from "react-icons/fa6";
import {FaReact} from "react-icons/fa";
import {BiLogoMongodb, BiLogoTypescript} from "react-icons/bi";
import {SiAmazondynamodb, SiMariadb} from "react-icons/si";
import {TbBrandNextjs} from "react-icons/tb";
import PlaceHolderWebsite1 from "@/public/img/placeholder-website-1.png";

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
        href: '/contact',
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
        company: 'Körbler GmbH',
        dateFrom: '2016/07',
        dateTo: '2016/08',
        role: 'Internship',
        description: "Web design (HTML, CSS, jQuery, JavaScript, PHP, LESS), development of an Electron application, use of PL/SQL and SQL",
        sidePosition: "left" as "left" | "right",
    },
    {
        company: 'Körbler GmbH',
        dateFrom: '2017/07',
        dateTo: '2017/08',
        role: 'Internship',
        description: "Web design (HTML, CSS, jQuery, JavaScript, PHP, LESS), development of an Electron application, use of PL/SQL and SQL",
        sidePosition: "right" as "left" | "right",
    },
    {
        company: 'CAMPUSonline',
        role: 'Internship & thesis',
        dateFrom: '2017/10',
        dateTo: '2019/05',
        description: "Application of PL/SQL, HTML and CSS",
        sidePosition: "left" as "left" | "right",
    },
    {
        company: 'DiniTech GmbH',
        role: 'Junior developer',
        dateFrom: '2020/06',
        dateTo: '2022/08',
        description: "Embedded development (C), backend (Python, Go, NoSQL, AWS), frontend (Swift, SwiftUI, Kotlin)",
        sidePosition: "right" as "left" | "right",
    },
    {
        company: 'niceshops GmbH',
        role: 'Backend developer and DevOps engineer',
        dateFrom: '2022/09',
        dateTo: 'now',
        description: "PHP, TypeScript, CSS, Gitlab, Kotlin, Lit, Webpack, Cypress, Jest",
        sidePosition: "left" as "left" | "right",
    },
];

export const projects = [
    {
        company: 'Personal homepage',
        description: "This is my personal homepage. It is built with Next.js and Tailwind CSS. The source code is available on GitHub.",
        programmingLanguages: [
            "NextJS",
            "TypeScript",
            "Tailwind CSS",
        ],
        image: PlaceHolderWebsite1,
        link: "https://github.com/mocruslan/homepage-personal",
    },
] as const;