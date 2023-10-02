export class LazyLoader<T> {
    private instance?: T;

    constructor(private classType: new (...args: any[]) => T, private args: any[]) {}

    public getInstance(): T {
        if (!this.instance) {
            this.instance = new this.classType(...this.args);
        }
        return this.instance;
    }
}
