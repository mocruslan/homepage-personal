import {IEntity} from "@/src/core/interface/IEntity";


export class MailEntity implements IEntity{
    protected _fromSender: string;
    protected _toReceiver: string;
    protected _subject: string;
    protected _content: string;
    protected _toCC?: string | undefined;

    constructor(from: string, to: string, subject: string, text: string, replyTo?: string) {
        this._fromSender = from;
        this._toReceiver = to;
        this._subject = subject;
        this._content = text;
        this._toCC = replyTo;
    }

    public get fromSender(): string {
        return this._fromSender;
    }

    public set fromSender(value: string) {
        this._fromSender = value;
    }

    public get toReceiver(): string {
        return this._toReceiver;
    }

    public set toReceiver(value: string) {
        this._toReceiver = value;
    }

    public get subject(): string {
        return this._subject;
    }

    public set subject(value: string) {
        this._subject = value;
    }

    public get content(): string {
        return this._content;
    }

    public set content(value: string) {
        this._content = value;
    }

    public get toCC(): string | undefined {
        return this._toCC;
    }

    public set toCC(value: string | undefined) {
        this._toCC = value;
    }

    public toJSON(): string {
        return JSON.stringify({
            from: this.fromSender,
            to: this.toReceiver,
            subject: this.subject,
            text: this.content,
            replyTo: this.toCC
        });
    }
}