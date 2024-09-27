import axios from 'axios';
import store from '@/store';
const instance = axios.create({
    baseURL: 'https://mallapi.duyiedu.com/',
})

instance.interceptors.request.use((config) => {
    console.log("config", config);
    if (config.url.includes('/passport')) {
        return config;
    } else {
        return {
            ...config,
            params: {
                ...config.params,
                appkey: store.state.user.appkey,
            }
        }
    }
}, (error) => {
    Promise.reject(error);
})

instance.interceptors.response.use((response) => {
    console.log("response", response);
    if (response.data.status === 'fail') {
        return Promise.reject(response.data.msg);
    } else {
        return response.data.data;
    }
}, (error) => {
    Promise.reject(error);
})

export default instance;