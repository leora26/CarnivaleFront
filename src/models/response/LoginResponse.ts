class LoginResponse {
    token: string;
    expiresIn: number;


    constructor(token: string, expiresIn: number) {
        this.token = token;
        this.expiresIn = expiresIn;
    }
}

export default LoginResponse