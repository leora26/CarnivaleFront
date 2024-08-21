class ApiResponse<T> {
    success: boolean;
    message: string;
    data: T | null;
    errors: string[];
    errorCode: number;
    path: string;

    constructor(success: boolean, message: string, data: T | null, errors: string[], errorCode: number, path: string) {
        this.success = success;
        this.message = message;
        this.data = data;
        this.errors = errors;
        this.errorCode = errorCode;
        this.path = path;
    }
}

export default ApiResponse;