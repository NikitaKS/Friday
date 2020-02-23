import React from "react";
import s from './Login.module.css'
import {NavLink, Redirect} from "react-router-dom";
import {emailValidator, passValidator} from "../../helpers/inputValidators/loginValidators";
import {STATUSES} from "../../redux/ActionCreatorsLogin/ActionCreatorsLogin";

interface ILoginState {
    email: string;
    password: string;
    rememberMe: boolean;
    error: string,
    isAuth: boolean,
    status: string
}

interface IProps {
    state: ILoginState;
    setEmail: (email: string) => void;
    setError: (error: string) => void;
    setPassword: (pass: string) => void;
    rememberMe: (checked: boolean) => void;
    login: () => void;
}

const Login = (props: IProps) => {
    if (props.state.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    const onClick = () => {
        let errorMail = emailValidator(props.state.email);
        let errorPass = passValidator(props.state.password);
        if (errorMail) {
            if (errorPass) {
                props.login()
            } else {
                props.setError('Inccorect password')
            }
        } else {
            props.setError('Invalid email')
        }
    };
    return (
        <div className={s.loginWrapper}>
            <div className="title">sign-in</div>
            {
                props.state.status === STATUSES.LOADING && <span>Loading...</span>
            }
            {
                props.state.status === STATUSES.SUCCESS && <span>Success</span>
            }
            <div className={s.inputWrapper}>
                <input onChange={(e) => props.setEmail(e.currentTarget.value)}
                       value={props.state.email} type="email"/>
                <input onChange={(e) => props.setPassword(e.currentTarget.value)}
                       value={props.state.password}
                       type="password"/>
            </div>
            {
                props.state.status === STATUSES.ERROR && <div className={s.error}>{props.state.error}</div>
            }
            <NavLink to={'/recovery'}>Forgot password?</NavLink>
            <div className={s.inputRemember}>
                <input onChange={(e) => props.rememberMe(e.currentTarget.checked)}
                       checked={props.state.rememberMe} type="checkbox"/>
                <div>Remember Me</div>
            </div>
            <button disabled={ props.state.status === STATUSES.LOADING} onClick={onClick}>Sign in</button>
            <NavLink to={'/register'}>Forgot password?</NavLink>
        </div>
    )
};
export default Login;