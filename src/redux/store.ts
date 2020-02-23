import {applyMiddleware, combineReducers, createStore} from "redux";
import reducerLogin from "./reducerLogin";
import reducerProfile from "./reducerProfile";
import reducerForgot from "./reducerForgot";
import reducerRegister from "./reducerRegister";
import thunk, {ThunkMiddleware} from "redux-thunk";

let rootReducer = combineReducers({
    login: reducerLogin,
    profile: reducerProfile,
    forgot: reducerForgot,
    register: reducerRegister
});

export type AppState = ReturnType<typeof rootReducer>;

let store = createStore(rootReducer, applyMiddleware(thunk as ThunkMiddleware<AppState, any>));
export default store;