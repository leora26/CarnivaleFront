import {LoginActions, LoginForm, LoginStyled} from "../../components/styled/login/Login.styled";
import LoginImg from "../../assets/pictures/login.png";
import InputV1 from "../../components/global/InputV1";
import CheckBox from "../../components/global/CheckBox";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <LoginStyled>
            <img src={LoginImg} alt="Login"/>
            <LoginForm>
                <p id="login-heading">log in</p>
                <InputV1 inputId="login-email" type="email" label="Email"/>
                <InputV1 inputId="login-password" type="password" label="Password"/>
                <LoginActions>
                    <CheckBox label="Remember me" checkboxId="remember-me"/>

                    <span><Link to="#">Forgot your password?</Link></span>
                </LoginActions>

                <button type="submit">Login</button>
                <p id="register-link">Not registered yet? <Link to="#">Create an account</Link></p>
            </LoginForm>
        </LoginStyled>
    )
}

export default Login;