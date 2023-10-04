export class StringHelper {
    public static validateString(string: unknown, maxLength?: number): boolean {
        return !(!string || typeof string !== "string" || (maxLength && string.length > maxLength));
    }
}