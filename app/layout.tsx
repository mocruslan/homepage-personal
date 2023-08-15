import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import React from "react";
import {Header} from "@/components/header/Header";
import {Background} from "@/components/Background";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Ruslan | Personal website',
    description: 'Ruslan is a software engineer who specializes in building (and occasionally designing) exceptional digital experiences. Currently, he’s focused on building accessible, human-centered products at Upstatement. Previously, he’s worked at companies like DiniTech and niceshops.',
    colorScheme: 'light dark',
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-gray-50 text-gray-950`}>
                <Header/>

                <Background/>

                {children}
            </body>
        </html>
    );
}

