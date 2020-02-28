import {IResponse} from "../components/Register/interfaces/types";
const axios = require('axios');

interface IInstanceControll {
    baseURL: string,
    post: (url:string,userData:object) => void
}
const instance: IInstanceControll = axios.create({
    baseURL: "https://dry-forest-56016.herokuapp.com/auth/"

});
interface IUserControll {
    addUser: (userData:object) => Promise<IResponse>
}

export const usersAPI: IUserControll = <IUserControll>{
    addUser(userData){
        return instance.post(`register`, userData);
    }
}
