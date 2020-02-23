export const SET_EMAIL = '/login/SET_EMAIL';
export const SET_PASS = '/login/SET_PASS';
export const REMEMBER_ME = '/login/REMEMBER_ME';
export const SET_SERVER_USER_DATA = '/login/SET_SERVER_USER_DATA';
export const SET_SERVER_ERROR = '/login/SET_SERVER_ERROR';
export const SET_STATUS = '/login/SET_STATUS';

export const STATUSES = {
    LOADING: 'LOADING',
    SUCCESS: 'SUCCESS',
    NOT_INIT: 'NOT_INIT',
    ERROR: 'ERROR'
};

interface ISetEmail {
    type: typeof SET_EMAIL,
    email: string
}

interface ISetPass {
    type: typeof SET_PASS,
    pass: string,
}

interface IRememberMe {
    type: typeof REMEMBER_ME,
    checked: boolean,
}

interface ISetServerUserData {
    type: typeof SET_SERVER_USER_DATA,
    data: IServerData,
    isAuth: boolean
}

export interface IServerData {
    "_id": string,
    "email": string,
    "password": string,
    "rememberMe": boolean,
    "isAdmin": boolean,
    "created": string,
    "updated": string,
    "__v": number,
    "token": string,
    "tokenDeathTime": number
}

interface IServerError {
    type: typeof SET_SERVER_ERROR,
    error: string,
}

interface ISetStatus {
    type: typeof SET_STATUS,
    status: string
}

export type LoginActions =
    ISetEmail
    | ISetPass
    | IRememberMe
    | ISetServerUserData
    | ISetStatus
    | IServerError;

export const setEmailAC = (email: string): ISetEmail => {
    return {type: SET_EMAIL, email}
};

export const setPassAC = (pass: string): ISetPass => {
    return {type: SET_PASS, pass}
};
export const setRememberAC = (checked: boolean): IRememberMe => {
    return {type: REMEMBER_ME, checked}
};
export const setServerUserData = (data: IServerData, isAuth: boolean): ISetServerUserData => {
    return {type: SET_SERVER_USER_DATA, data, isAuth}
};
export const setServerError = (error: string): IServerError => {
    return {type: SET_SERVER_ERROR, error}
};
export const setStatus = (status: string): ISetStatus => {
    return {type: SET_STATUS, status}
};