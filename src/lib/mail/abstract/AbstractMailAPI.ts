import {IMail} from "@/src/lib/mail/interface/IMail";

const RESEND_API_KEY = process.env.RESEND_API_KEY;

export abstract class AbstractMailAPI implements IMail {
    protected abstract getClient(): any;

    public abstract send(entity: any): any;
}