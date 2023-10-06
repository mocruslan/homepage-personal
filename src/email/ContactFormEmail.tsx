import React from "react";
import {Body, Container, Head, Heading, Hr, Html, Preview, Section, Tailwind, Text} from "@react-email/components";

type ContactFormEmailProps = {
    senderEmail: string;
    message: string;
};

const ContactFormEmail = ({senderEmail, message}: ContactFormEmailProps) => {
    return (
        <Html>
            <Head/>
            <Preview>New message from your portfolio!</Preview>
            <Tailwind>
                <Body className="bg-gray-100 text-black">
                    <Container>
                        <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
                            <Heading className="leading-tight">
                                You received the following message from the contact form
                            </Heading>
                            <Text>{message}</Text>
                            <Hr/>
                            <Text>The sender&apos;s email is: {senderEmail}</Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}

export {ContactFormEmail};