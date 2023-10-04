import {MailEntity} from "@/src/lib/mail/MailEntity";
import {MailResendAPI} from "@/src/lib/mail/MailResendAPI";
import {FIELD_NAME_EMAIL_FROM, FIELD_NAME_MESSAGE, FIELD_NAME_SUBJECT} from "@/src/lib/mail/MailConst";
import {StringHelper} from "@/src/utils/Helper/StringHelper";

export class MailFactory {
    public createMailEntityFromFormData(formData: FormData): MailEntity {
        const senderEmail = formData.get(FIELD_NAME_EMAIL_FROM);
        const subject = formData.get(FIELD_NAME_SUBJECT);
        const message = formData.get(FIELD_NAME_MESSAGE);

        if (!StringHelper.validateString(senderEmail, 500)) {
            throw new Error('Invalid sender email');
        }
        if (!StringHelper.validateString(subject, 500)) {
            throw new Error('Invalid subject');
        }
        if (!StringHelper.validateString(message, 5000)) {
            throw new Error('Invalid message');
        }

        return new MailEntity(
            process.env.RESEND_EMAIL || '',
            process.env.PERSONAL_EMAIL || '',
            subject as string,
            message as string,
            senderEmail as string,
        );
    }

    public createResendMailAPI(): MailResendAPI {
        return new MailResendAPI();
    }
}