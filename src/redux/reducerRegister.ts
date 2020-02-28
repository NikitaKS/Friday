import {ReducerActionsTypes} from "./ActionCreatorRegister/ActionCreatorRegister";

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






export default reducerRegister;