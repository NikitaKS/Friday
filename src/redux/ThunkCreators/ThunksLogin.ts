import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppState} from "../store";
import {
    LoginActions,
    setServerUserData,
    setServerError,
    setStatus,
    STATUSES
} from "../ActionCreatorsLogin/ActionCreatorsLogin";
import {apiLogin} from "../../dal/apiLogin";

type Return = void;
type ExtraArgument = {};
type IGetStore = () => AppState;

export const loginTC = ()
    : ThunkAction<Return, AppState, ExtraArgument, LoginActions> => (
    dispatch: ThunkDispatch<AppState, ExtraArgument, LoginActions>,
    getStore: IGetStore) => {
    dispatch(setStatus(STATUSES.LOADING));
    let email = getStore().login.email;
    let pass = getStore().login.password;
    let rememberMe = getStore().login.rememberMe;
    apiLogin.login(email, pass, rememberMe).then(response => {
        dispatch(setStatus(STATUSES.SUCCESS));
        setTimeout(() => {
            dispatch(setServerUserData(response, true));
        }, 2000);
    })
        .catch((error) => {
            dispatch(setStatus(STATUSES.ERROR));
            dispatch(setServerError(error.response.data.error));
        })
};