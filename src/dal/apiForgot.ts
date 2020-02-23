import axios from "axios";

const instance = axios.create({
    baseURL: 'https://dry-forest-56016.herokuapp.com/auth',
});

const apiForgot = {
    recoverThePassword(email : string) {
        return instance.post('/forgot',{email})
            .then(response => {
                return {error : false, message : 'Пароль на почту отправлен!'}
            })
            .catch(error => {
                if (!error.response) return {error : true, message : error.message};
                else return {error : true, message : error.response.data.error};
            })
    }
};

export default apiForgot;

