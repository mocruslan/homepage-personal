"use client"

import React, {useState} from "react";
import ContactForm from "@/components/page/contact/ContactForm";
import ParagraphTitle from "@/components/ParagraphTitle";
import {BusinessCard} from "@/components/shared/BusinessCard";
import {cn} from "@/lib/utils";

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

                <div className="flex flex-col gap-5 md:flex-row">
                    <BusinessCard onCardFlipped={handleCardFlipped}/>

                    <div
                        className={cn(
                            "flex-none invisible opacity-0 translate-x-[6rem] w-0 h-0 duration-500 overflow-hidden transition-all",
                            {
                                'flex-1 visible opacity-100 translate-x-0 w-auto h-auto': isCardFlipped
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