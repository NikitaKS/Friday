import {
    IServerData,
    LoginActions,
    REMEMBER_ME,
    SET_EMAIL,
    SET_PASS,
    SET_SERVER_ERROR,
    SET_SERVER_USER_DATA,
    SET_STATUS,
    STATUSES
} from "./ActionCreatorsLogin/ActionCreatorsLogin";


interface IInitialState {
    email: string;
    password: string;
    rememberMe: boolean;
    serverData: IServerData | {},
    error: string,
    isAuth: boolean,
    status: string
}

let initialState: IInitialState = {
    email: 'test@email.nya',
    password: "ftc{.}mxy~gub%jzc",
    rememberMe: true,
    serverData: {},
    error: '',
    isAuth: false,
    status: STATUSES.NOT_INIT
};


const reducerLogin = (state: IInitialState = initialState, action: LoginActions): IInitialState => {
    switch (action.type) {
        case SET_EMAIL: {
            return {
                ...state,
                email: action.email
            }
        }
        case SET_PASS: {
            return {
                ...state,
                password: action.pass
            }
        }
        case REMEMBER_ME: {
            return {
                ...state,
                rememberMe: action.checked
            }
        }
        case SET_SERVER_USER_DATA: {
            return {
                ...state,
                email: '',
                password: '',
                rememberMe: false,
                serverData: action.data,
                isAuth: action.isAuth
            }
        }
        case SET_SERVER_ERROR: {
            return {
                ...state,
                error: action.error,
                isAuth: false
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state
    }
};

export default reducerLogin;