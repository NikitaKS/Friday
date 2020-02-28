import React from 'react';
import Register from "./Register";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppState} from "../../redux/store";
import {registerUserThunk} from "../../redux/ThunkCreators/ThunksRegister";
import {successUserAddeACAC} from "../../redux/ActionCreatorRegister/ActionCreatorRegister";


interface IMapDispatchToProps {
    registerUser: (email: string, password: string) => void,
    successUserAdded: (success: boolean) => void

}

interface IMapStateToProps {
    email: string
    isAdmin: boolean
    _id: string,
    error: string | undefined,
    success: boolean,
    isFetching: boolean
}


class RegisterContainer extends React.Component<IMapDispatchToProps & IMapStateToProps> {
    render() {
        return <Register successUserAdded={this.props.successUserAdded} isFetching={this.props.isFetching}
                         success={this.props.success} error={this.props.error}
                         regUser={this.props.registerUser}/>
    }
}

let mapDispatchToProps = (dispatch: Dispatch): IMapDispatchToProps => {
    return {
        registerUser(email, password) {
            dispatch(registerUserThunk(email, password));
        },
        successUserAdded(success) {
            dispatch(successUserAddeACAC(success));
        }

    }
}
let mapStateToProps = (state: AppState): IMapStateToProps => {
    return {
        email: state.register.email,
        isAdmin: state.register.isAdmin,
        _id: state.register._id,
        error: state.register.error,
        success: state.register.success,
        isFetching: state.register.isFetching
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);

