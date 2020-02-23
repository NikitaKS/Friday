import axios from 'axios'
import {IServerData} from "../redux/ActionCreatorsLogin/ActionCreatorsLogin";

const instance = axios.create({
    baseURL: 'https://dry-forest-56016.herokuapp.com/auth'
});

export const apiLogin = {
    login(email: string, password: string, rememberMe: boolean): Promise<IServerData> {
        return instance.post('/login', {email, password, rememberMe}).then((res) => {
            return res.data
        })
    }
};