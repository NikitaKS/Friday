import React from "react";
import Forgot from "./Forgot"
import {connect} from "react-redux";
import {AppState} from "../../redux/store";
import {recoverThePassword} from "../../redux/reducerForgot";
import {changeEmailCreatorAC, isLoadingAC} from "../../redux/ActionCreatorForgot/acrionCreatorForgot";


interface IMapStateToProps {
    textEmail : string;
    errorMessage : string;
    isLoading : boolean;
    disabledBtnForgot : boolean;
}

const mapStateToProps = (state :  AppState) : IMapStateToProps => {
    return {
        textEmail : state.forgot.textEmail,
        errorMessage : state.forgot.errorMessage,
        isLoading : state.forgot.isLoading,
        disabledBtnForgot : state.forgot.disabledBtnForgot,
    }
}

const ForgotContainer = connect(mapStateToProps, {changeEmailCreatorAC, recoverThePassword, isLoadingAC})(Forgot)

export default ForgotContainer;