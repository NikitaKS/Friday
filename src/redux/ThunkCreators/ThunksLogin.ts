import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppState} from "../store";
import {LoginActions, setServerUserData, setServerError, isLoadingAC} from "../ActionCreatorsLogin/ActionCreatorsLogin";
import {apiLogin} from "../../dal/apiLogin";
import {emailValidator, passValidator} from "../../helpers/inputValidators/loginValidators";

type Return = void;
type ExtraArgument = {};
type IGetStore = () => AppState;
export const loginTC = ()
    : ThunkAction<Return, AppState, ExtraArgument, LoginActions> => (
    dispatch: ThunkDispatch<AppState, ExtraArgument, LoginActions>,
    getStore: IGetStore) => {
    let email = getStore().login.email;
    let pass = getStore().login.password;
    let rememberMe = getStore().login.rememberMe;
    dispatch(isLoadingAC(true));
    apiLogin.login(email, pass, rememberMe).then(response => {
        dispatch(setServerUserData(response.data, true));
        dispatch(isLoadingAC(false))
    })
        .catch(e => {
            let data = e.response.data.error;
            dispatch(setServerError(data));
            dispatch(isLoadingAC(false))
        })
};