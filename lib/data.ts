import {FaAws, FaC, FaCss3, FaGolang, FaHtml5, FaJava, FaJs, FaNodeJs, FaPhp, FaPython} from "react-icons/fa6";
import {FaReact} from "react-icons/fa";
import {BiLogoMongodb, BiLogoTypescript} from "react-icons/bi";
import {SiAmazondynamodb, SiMariadb} from "react-icons/si";
import {TbBrandNextjs} from "react-icons/tb";

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