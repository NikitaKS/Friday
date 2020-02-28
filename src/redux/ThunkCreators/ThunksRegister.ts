import {Dispatch} from "redux";
import {
    setUserDataAC, setUserDataError, successUserAddeACAC,
    toogleIsFetchingAC
} from "../ActionCreatorRegister/ActionCreatorRegister";
import {IResponse} from "../../components/Register/interfaces/types";
import {usersAPI} from "../../dal/apiRegister";
export const registerUserThunk = (email: string, password: string): any => {
    return async (dispatch: Dispatch) => {
        dispatch(toogleIsFetchingAC(true));
        await usersAPI.addUser({email: email, password: password}).then((response: IResponse) => {
            dispatch(successUserAddeACAC(true));
            debugger
            dispatch(setUserDataAC(response.data));
        }).catch((e: any) => {
            debugger
            let error = e.response.data.error;
            dispatch(setUserDataError(error));
        })
        dispatch(toogleIsFetchingAC(false));
    }
}
