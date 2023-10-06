import {CreateEmailResponse} from "resend/build/src/emails/interfaces";
import {AbstractMailAPI} from "@/src/lib/mail/abstract/AbstractMailAPI";
import {Resend} from "resend";
import {MailEntity} from "@/src/lib/mail/MailEntity";
import {ErrorHelper} from "@/src/utils/Helper/ErrorHelper";
import {ContactFormEmail} from "@/src/email/ContactFormEmail";
import React from "react";

export class MailResendAPI extends AbstractMailAPI {
    protected client?: Resend;

    protected getClient(): Resend {
        if (!this.client) {
            this.client = new Resend( process.env.API_KEY_RESEND);
        }

        return this.client
    }

    public async send(entity: MailEntity): Promise<{error?: string, data?: CreateEmailResponse}> {
        console.log('Sending the following email: ' + entity.toJSON());

        let data: CreateEmailResponse;
        try {
            data = await this.getClient().emails.send({
                from: entity.fromSender,
                to: entity.toReceiver,
                reply_to: entity.toCC,
                subject: entity.subject,
                react: React.createElement(ContactFormEmail, {
                    senderEmail: entity.toReceiver,
                    message: entity.content,
                })
            });
        } catch (err: unknown) {
            let error = ErrorHelper.getErrorMessage(err);
            console.error(error);

            return {error: error};
        }

        return {data: data};
    }
}