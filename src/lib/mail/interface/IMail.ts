import {CreateEmailOptions} from "resend/build/src/emails/interfaces";

export interface IMail {
    send(payload: CreateEmailOptions): any;
}