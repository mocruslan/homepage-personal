import {CreateEmailResponse} from "resend/build/src/emails/interfaces";
import {AbstractMailAPI} from "@/src/lib/mail/abstract/AbstractMailAPI";
import {Resend} from "resend";
import {MailEntity} from "@/src/lib/mail/MailEntity";
import {ErrorHelper} from "@/src/utils/Helper/ErrorHelper";

export class MailResendAPI extends AbstractMailAPI {
    protected client?: Resend;

    protected getClient(): Resend {
        if (!this.client) {
            this.client = new Resend( process.env.RESEND_API_KEY);
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
                reply_to: entity.toReceiver,
                subject: entity.subject,
                html: '<p>' + entity.content + '</p>'
            });
        } catch (err: unknown) {
            let error = ErrorHelper.getErrorMessage(err);
            console.error(error);

            return {error: error};
        }

        return {data: data};
    }
}