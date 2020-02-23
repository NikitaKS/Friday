import {SET_ERROR, SET_USER_DATA, SUCCESS_USER_ADDED, TOGGLE_IS_FETCHING} from "../../../redux/reducerRegister";
export interface IUserData {
    addedUser: {
        email: string,
            isAdmin: boolean,
            password: string,
            __v: number,
            _id: string
    },
    success: boolean

}
export interface IResponse {
    data: IUserData,
        status: number
    statusText: string
    headers: object
    config: object
    request: any
}
export interface ISetUserDataAction {
    type: typeof SET_USER_DATA
    userData: IUserData
}
export interface ISetUserDataErrorAction {
    type: typeof SET_ERROR
    error: string
}

export interface IToggleIsFetching {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export interface ISuccessUserAdded {
    type: typeof SUCCESS_USER_ADDED
    success: boolean
}