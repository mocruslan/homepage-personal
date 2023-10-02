"use client"

import React, {useState} from "react";
import {ContactForm} from "@/src/components/page/contact/ContactForm";
import ParagraphTitle from "@/src/components/ParagraphTitle";
import {BusinessCard} from "@/src/components/shared/BusinessCard";
import {cn} from "@/utils/css";

const Contact = () => {
    const [isCardFlipped, setCardFlipped] = useState(false)

    const handleCardFlipped = () => {
        setCardFlipped(!isCardFlipped)
    }

    return (
        <main className="relative container mx-auto">
            <section>
                <ParagraphTitle>
                    Let&apos;s get in contact!
                </ParagraphTitle>

                <div className="flex flex-col items-center justify-center gap-5">
                    <BusinessCard onCardFlipped={handleCardFlipped} className="z-50"/>

                    <div
                        className={cn(
                            "z-40 flex-none invisible opacity-0 -translate-y-[12rem] duration-500 overflow-hidden transition-all",
                            {
                                'flex-1 visible opacity-100 translate-y-0 w-[26rem]': isCardFlipped
                            }
                        )}
                    >
                        <ContactForm/>
                    </div>
                </div>

            </section>
        </main>
    );
}

export default Contact;