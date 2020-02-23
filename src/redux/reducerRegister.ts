import {Dispatch} from "redux";
import {
    IResponse, ISetUserDataAction, ISetUserDataErrorAction, ISuccessUserAdded, IToggleIsFetching,
    IUserData
} from "../components/Register/interfaces/types";
import {usersAPI} from "../components/Register/api/api";

export const SET_USER_DATA = "SET_USER_DATA"
export const SET_ERROR = "SET_ERROR";
export const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
export const SUCCESS_USER_ADDED = "SUCCESS_USER_ADDED";


const axios = require('axios');
const instance: any = axios.create({
    baseURL: "https://dry-forest-56016.herokuapp.com/auth/"

});

interface IInitialState {
    email: string,
    isAdmin: boolean,
    _id: string,
    error?: string,
    success: boolean,
    isFetching: boolean
}

let initialState: IInitialState = {
    email: '',
    isAdmin: false,
    _id: '',
    error: '',
    success: false,
    isFetching: false
};


const reducerRegister = (state: IInitialState = initialState, action: ReducerActionsTypes): IInitialState => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                email: action.userData.addedUser.email,
                isAdmin: action.userData.addedUser.isAdmin,
                _id: action.userData.addedUser._id,
                error: ''
            }
        }
        case SET_ERROR: {
            return {
                ...state,
                error: action.error
            }
        }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SUCCESS_USER_ADDED:
            return {
                ...state,
                success: action.success
            }
        default:
            return state
    }
};


type ReducerActionsTypes = ISetUserDataAction | ISetUserDataErrorAction | IToggleIsFetching | ISuccessUserAdded;


export const successUserAddeACAC = (success: boolean): ISuccessUserAdded => ({type: SUCCESS_USER_ADDED, success})

export const toogleIsFetchingAC = (isFetching: boolean): IToggleIsFetching => ({type: TOGGLE_IS_FETCHING, isFetching})

export const setUserDataAC = (userData: IUserData): ISetUserDataAction => ({type: SET_USER_DATA, userData})
export const setUserDataError = (error: string): ISetUserDataErrorAction => ({type: SET_ERROR, error})

export const registerUserThunk = (email: string, password: string): any => {
    return async (dispatch: Dispatch) => {
        dispatch(toogleIsFetchingAC(true));
        await usersAPI.addUser({email: email, password: password}).then((response: IResponse) => {
            dispatch(successUserAddeACAC(true))
            dispatch(setUserDataAC(response.data))
        }).catch((e: any) => {
            let error = e.response.data.error;
            dispatch(setUserDataError(error))
        })
        dispatch(toogleIsFetchingAC(false));
    }
}


export default reducerRegister;