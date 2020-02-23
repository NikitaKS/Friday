import {
    IS_LOADING,
    IServerData,
    LoginActions,
    REMEMBER_ME,
    SET_EMAIL,
    SET_PASS,
    SET_SERVER_ERROR,
    SET_SERVER_USER_DATA
} from "./ActionCreatorsLogin/ActionCreatorsLogin";


interface IInitialState {
    email: string;
    password: string;
    rememberMe: boolean;
    serverData: IServerData | {},
    error: string,
    isAuth: boolean,
    isLoading: boolean
}

let initialState: IInitialState = {
    email: 'nikolas@gmail.com',
    password: "1234567890",
    rememberMe: true,
    serverData: {},
    error: '',
    isAuth: false,
    isLoading: false
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
        case IS_LOADING: {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default:
            return state
    }
};

export default reducerLogin;