import config from 'config';
import {postRequest} from "../utils/ajax";
import {history} from '../utils/history';
import {message} from 'antd';

const saveUserInfo = (data)=>{
    localStorage.setItem('user', data);
}

export const getUserInfo = (data)=>{
    return JSON.parse(localStorage.getItem('user', data))
}

export const removeUserInfo = ()=>{
    localStorage.removeItem('user');
}

export const userTypeConvert = (userType)=>{
    const dict = {0:'User',1:'Admin'}
    if (userType in dict){
        return dict[userType]
    }
    else message.error("User Type Unknown");
}

export const login = (data) => {
    const url = `${config.apiUrl}/login`;
    const callback = (data) => {
        if(data.status >= 0) {
            saveUserInfo(JSON.stringify(data.data))
            history.push("/home");
            message.success(data.msg);
        }
        else{
            message.error(data.msg);
        }
    };
    postRequest(url, data, callback);
};

export const logout = () => {
    const url = `${config.apiUrl}/logout`;

    const callback = (data) => {
        if(data.status >= 0) {
            removeUserInfo();
            history.push("/login");
            message.success(data.msg);
        }
        else{
            message.error(data.msg);
        }
    };
    postRequest(url, {}, callback);
};

export const checkSession = (callback) => {
    const url = `${config.apiUrl}/checkSession`;
    postRequest(url, {}, callback);
};

