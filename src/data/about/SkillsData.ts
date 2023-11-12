import {FaAws, FaC, FaCss3, FaGolang, FaHtml5, FaJava, FaJs, FaNodeJs, FaPhp, FaPython} from "react-icons/fa6";
import {BiLogoMongodb, BiLogoTypescript} from "react-icons/bi";
import {FaReact} from "react-icons/fa";
import {TbBrandNextjs} from "react-icons/tb";
import {SiAmazondynamodb, SiMariadb} from "react-icons/si";

export const skillsData = [
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