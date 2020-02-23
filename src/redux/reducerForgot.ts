import {Dispatch} from "redux";
import {AppState} from "./store";
import apiForgot from "../dal/apiForgot";
import {
    CHANGE_EMAIL,
    ERROR,
    ForgotActions,
    errorCreatorAC, IS_LOADING, isLoadingAC
} from "./ActionCreatorForgot/acrionCreatorForgot";
import {emailValidator} from "../helpers/recoveryValidators/recoveryValidator";


interface IInitialState {
    textEmail: string;
    errorMessage: string;
    isLoading : boolean;
    disabledBtnForgot : boolean
}

let initialState: IInitialState = {
    textEmail: 'test@email.nya',
    errorMessage: '',
    isLoading : false,
    disabledBtnForgot : false
};

const reducerForgot = (state: IInitialState = initialState, action: ForgotActions): IInitialState => {
    switch (action.type) {
        case CHANGE_EMAIL:
            return {
                ...state,
                textEmail: action.email
            };
        case ERROR:
            return {
                ...state,
                errorMessage: action.errorMessage
            };
        case IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };
        default:
            return state
    }
};

//thunk
export const recoverThePassword = () => (dispatch: Dispatch, getState: () => AppState): void => {
    let email = getState().forgot.textEmail;
    let emailError = emailValidator(email);
    if(emailError){
        debugger
        dispatch(isLoadingAC(true))
        apiForgot.recoverThePassword(email).then((response) => {
            dispatch(isLoadingAC(false))
            if(response.error) dispatch(errorCreatorAC(response.message));
        })
    } else {
        dispatch(errorCreatorAC('Not valid email!!!'))
    }
 };

export default reducerForgot;