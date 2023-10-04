"use server"

import {MailFactory} from "@/src/lib/mail/MailFactory";

export const sendMailAction = async (formData: any) => {
    let mailFactory = new MailFactory();
    let mailEntity = mailFactory.createMailEntityFromFormData(formData);

    return await mailFactory.createResendMailAPI().send(mailEntity);
}