import React from "react";
import {NavLink} from "react-router-dom";

interface IProps {
    textEmail: string;
    errorMessage: string
    changeEmailCreatorAC: (value: string) => void;
    recoverThePassword: () => void;
    isLoading : boolean;
}

const Forgot = (props: IProps) => {
    const {textEmail} = props;

    const handleChange = (event : React.FormEvent<HTMLInputElement>) => {
        props.changeEmailCreatorAC(event.currentTarget.value)
    };

    const handleClick = () => {
        props.recoverThePassword();
    };

    return (
        <div>
            <h2>Forgot</h2>
            {
                (props.isLoading) &&  <span>Loading...</span>
            }
            {

                (props.errorMessage.length !== 0) &&  <span>{props.errorMessage}</span>
            }
            <div>
                <input type="text" value={textEmail} onChange={handleChange}/>
                <button onClick={handleClick}>Send email</button>
                <NavLink to={'/login'}>In login</NavLink>
            </div>
        </div>
    )
};
export default Forgot;