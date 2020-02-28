import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../redux/store";
import {setEmailAC, setPassAC, setRememberAC, setServerError} from "../../redux/ActionCreatorsLogin/ActionCreatorsLogin";
import {loginTC} from "../../redux/ThunkCreators/ThunksLogin";
import Login from "./Login";

const LoginContainer = () => {

    const state = useSelector((state: AppState) => state.login);

    const dispatch = useDispatch();

    const setEmail = (email: string) => {
        dispatch(setEmailAC(email))
    };
    const setPassword = (pass: string) => {
        dispatch(setPassAC(pass))
    };
    const rememberMe = (checked: boolean) => {
        dispatch(setRememberAC(checked))
    };
    const login = () => {
        dispatch(loginTC())
    };
    const setError = (error: string) => {
        dispatch(setServerError(error))
    };
    return (
        <Login
            rememberMe={rememberMe}
            setError={setError}
            setPassword={setPassword}
            login={login}
            setEmail={setEmail}
            state={state}
        />
    )
};
export default LoginContainer;