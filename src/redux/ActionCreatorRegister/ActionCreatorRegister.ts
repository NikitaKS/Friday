import {
    ISetUserDataAction, ISetUserDataErrorAction, ISuccessUserAdded,
    IToggleIsFetching, IUserData
} from "../../components/Register/interfaces/types";
import {SET_ERROR, SET_USER_DATA, SUCCESS_USER_ADDED, TOGGLE_IS_FETCHING} from "../reducerRegister";
export type ReducerActionsTypes = ISetUserDataAction | ISetUserDataErrorAction | IToggleIsFetching | ISuccessUserAdded;

export const successUserAddeACAC = (success: boolean): ISuccessUserAdded => ({type: SUCCESS_USER_ADDED, success})
export const toogleIsFetchingAC = (isFetching: boolean): IToggleIsFetching => ({type: TOGGLE_IS_FETCHING, isFetching})
export const setUserDataAC = (userData: IUserData): ISetUserDataAction => ({type: SET_USER_DATA, userData})
export const setUserDataError = (error: string): ISetUserDataErrorAction => ({type: SET_ERROR, error})