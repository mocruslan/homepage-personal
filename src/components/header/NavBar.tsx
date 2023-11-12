"use client"

import React from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {navLinkData} from "@/src/data/navigation/NavLinkData";

export const NavBar = () => {
    return (
            <motion.div
                initial={{y: -100, x: "-50%", opacity: 0}}
                animate={{y: 0, x: "-50%", opacity: 1}}
                className="fixed flex items-center justify-center top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[25rem] sm:rounded-full"
            >
                <nav className="flex fixed left-1/2 h-12 -translate-x-1/2 py-2 sm:h-[initial] sm:py-0">
                    <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
                        {
                            navLinkData.map((navItem: NavItemProps) => (
                                <NavItem key={navItem.name} name={navItem.name} href={navItem.href}/>
                            ))
                        }
                    </ul>
                </nav>
            </motion.div>
    );
}

type NavItemProps = {
    name: string,
    href: string,
}

const NavItem = (props: NavItemProps) => {
    return (
        <li className="h-3/4 flex items-center justify-center">
            <Link
                href={props.href}
                className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition"
            >
                {props.name}
            </Link>
        </li>
    );
}