import {IMail} from "@/src/lib/mail/interface/IMail";

export abstract class AbstractMailAPI implements IMail {
    protected abstract getClient(): any;

    public abstract send(entity: any): any;
}