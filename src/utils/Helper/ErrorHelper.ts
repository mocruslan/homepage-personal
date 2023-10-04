export class ErrorHelper {
    public static getErrorMessage = (err: unknown): string => {
        let message = 'Unknown error';

        if (err instanceof Error) {
            message = err.message;
        } else if (err && typeof err === 'object' && 'message' in err) {
            message = String(err.message);
        } else if (typeof err === 'string') {
            message = err;
        }

        return message;
    }
}
