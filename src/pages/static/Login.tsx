import { LoginActions, LoginForm, LoginStyled } from "../../components/styled/login/Login.styled";
import LoginImg from "../../assets/pictures/login.png";
import InputV1 from "../../components/global/InputV1";
import CheckBox from "../../components/global/CheckBox";
import { Link } from "react-router-dom";
import React, {useRef, useState} from "react";
import axios, {AxiosResponse} from "axios";
import LoginRequest from "../../models/request/LoginRequest";
import ApiResponse from "../../models/response/ApiResponse";
import LoginResponse from "../../models/response/LoginResponse";
import InputErrorMessage from "../../components/global/InputErrorMessage";

const Login: React.FC = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [error, setError] = useState<boolean>(false);
    // const [success, setSuccess] = useState<boolean>(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        if (email && password) {
            loginRequest(email, password);
        }
    };

    const loginRequest = async (email: string, password: string) => {
        const request: LoginRequest = {
            email,
            password
        }

        try {
            const response: AxiosResponse<ApiResponse<LoginResponse>> = await axios.post<ApiResponse<LoginResponse>>(
                'http://localhost:8080/api/auth/login',
                request
            );

            if (response.data.success) {
                // setSuccess(true);
                setError(false);
                console.log(response.data.data)
                return response.data.data;
            } else {
                throw new Error("Failed to login");
            }

        } catch (error: any) {
            console.log("Login failed: ", error.message);
            setError(true);
            // setSuccess(false);

            if (emailRef.current) emailRef.current.value = "";
            if (passwordRef.current) passwordRef.current.value = "";
        }
    }

    return (
        <LoginStyled>
            <img src={LoginImg} alt="Login" />
            <LoginForm onSubmit={handleSubmit}>
                <p id="login-heading">log in</p>
                <InputV1 ref={emailRef} inputId="login-email" type="email" label="Email" />
                <InputV1 ref={passwordRef} inputId="login-password" type="password" label="Password" />
                <LoginActions>
                    <CheckBox label="Remember me" checkboxId="remember-me" />
                    <span>
                        <Link to="#">Forgot your password?</Link>
                    </span>
                </LoginActions>

                {error && <InputErrorMessage message="Falied to login" />}
                {/*{success && <p id="success-message">Successfully logged in!</p>}*/}

                <button type="submit">Login</button>
                <p id="register-link">
                    Not registered yet? <Link to="/register">Create an account</Link>
                </p>
            </LoginForm>
        </LoginStyled>
    );
};

export default Login;
