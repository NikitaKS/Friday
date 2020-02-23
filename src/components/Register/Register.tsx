import React from 'react';
import style from './Register.module.css';
import {Redirect} from "react-router";
import {NavLink} from 'react-router-dom';


interface IProps {
    regUser: (email: string, password: string) => void,
    successUserAdded: (success: boolean) => void,
    error: string | undefined,
    success: boolean,
    isFetching: boolean

}

interface IState {
    email: string,
    password: string,
    confPass: string,
    error: string
}

class Register extends React.Component<IProps, IState> {
    state: IState = {
        email: '',
        password: '',
        confPass: '',
        error: ''
    }

    setDataUserFromState = (e: any) => {
        this.props.successUserAdded(false);
        if (this.state.password !== this.state.confPass) {
            this.setState({error: 'Passwords dont match!'});
        } else {
            this.props.regUser(this.state.email, this.state.password);
            this.setState({error: ''});
        }
    }

    render() {
        return (
            <div className={style.container}>
                <div className={style.wrapper}>
                    <h4>Register</h4>

                    <div className={style.errorBlock}>
                        <div className={style.error}>
                            <div>
                                {this.props.success && 'success'}
                            </div>
                            <div>
                                {this.state.error}
                            </div>
                            <div>
                                {this.props.error}
                            </div>
                        </div>
                        <input className={style.inputForm} placeholder="Email" value={this.state.email}
                               onChange={(e) => this.setState({email: e.currentTarget.value})} name="email"
                               type="text"
                               required/>
                    </div>
                    <div>
                        <input className={style.inputForm} placeholder="Password" value={this.state.password}
                               onChange={(e) => this.setState({password: e.currentTarget.value})} name="password"
                               type="password" required/>
                    </div>
                    <div>
                        <input className={style.inputForm} placeholder="Repeat Password" value={this.state.confPass}
                               onChange={(e) => this.setState({confPass: e.currentTarget.value})} name="password"
                               type="password" required/>
                    </div>
                    <button className={style.registerbtn} disabled={this.props.isFetching ? true : false}
                            onClick={this.setDataUserFromState}>Register
                    </button>
                    <div className={`${style.container} ${style.signin}`}>
                        <p>Already have an account? <NavLink to={'/login'}>Sign in.</NavLink></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;

