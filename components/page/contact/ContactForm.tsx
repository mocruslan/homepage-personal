"use client"

import React from "react";
import FormInput from "@/components/shared/FormInput";
import {Button} from "@/components/shared/Button";

export const ContactForm = () => {
    return (
        <form
            className="flex flex-col w-full bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] rounded-2xl p-5"
            onSubmit={(e) => {
                e.preventDefault();
            }}
        >
            <FormInput
                inputLabel="Full Name"
                labelFor="name"
                inputType="text"
                inputId="name"
                inputName="name"
                placeholderText="Your Name"
                ariaLabelName="Name"
            />
            <FormInput
                inputLabel="Email"
                labelFor="email"
                inputType="email"
                inputId="email"
                inputName="email"
                placeholderText="Your email"
                ariaLabelName="Email"
            />
            <FormInput
                inputLabel="Subject"
                labelFor="subject"
                inputType="text"
                inputId="subject"
                inputName="subject"
                placeholderText="Subject"
                ariaLabelName="Subject"
            />

            <div className="mt-6">
                <label
                    className="mb-1 block font-semibold text-lg text-primary-light"
                    htmlFor="message"
                >
                    Message
                </label>
                <textarea
                    className="w-full max-h-[20rem] bg-gray-100 rounded-md border border-black/5 p-1"
                    id="message"
                    name="message"
                    cols={14}
                    rows={6}
                    aria-label="Message"
                />
            </div>

            <div className="mt-6">
                <Button aria-label="Send Message">
                    Send Message
                </Button>
            </div>
        </form>
    );
}