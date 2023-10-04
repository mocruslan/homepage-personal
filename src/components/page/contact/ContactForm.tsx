import React from "react";
import FormInput from "@/src/components/shared/FormInput";
import {Button} from "@/src/components/shared/Button";
import {sendMailAction} from "@/src/actions/sendMailAction";
import {
    FIELD_NAME_EMAIL_FROM,
    FIELD_NAME_FULL_NAME,
    FIELD_NAME_MESSAGE,
    FIELD_NAME_SUBJECT
} from "@/src/lib/mail/MailConst";

export const ContactForm = () => {
    return (
        <form
            className="flex flex-col w-full bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] rounded-2xl p-5"
            action={async (formData) => {
                await sendMailAction(formData);
            }}
        >
            <FormInput
                inputLabel="Full Name"
                labelFor="name"
                inputType="text"
                inputId="name"
                inputName={FIELD_NAME_FULL_NAME}
                placeholderText="Your Name"
                ariaLabelName="Name"
            />
            <FormInput
                inputLabel="Email"
                labelFor="email"
                inputType="senderEmail"
                inputId="email"
                inputName={FIELD_NAME_EMAIL_FROM}
                placeholderText="Your email"
                ariaLabelName="Email"
            />
            <FormInput
                inputLabel="Subject"
                labelFor="subject"
                inputType="text"
                inputId="subject"
                inputName={FIELD_NAME_SUBJECT}
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
                    name={FIELD_NAME_MESSAGE}
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