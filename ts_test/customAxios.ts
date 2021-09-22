/**
 * @program: axios 封装
 * @description:
 * @author: Jinjf
 * @date: 2021-09-20 12:55
 **/

import axios, {AxiosResponse, AxiosError, AxiosRequestConfig} from 'axios'

type GS_DOC = {
    name?: string | number;
}

declare global {
    interface Window {
        GS_Doc: GS_DOC;
    }
}

window.GS_Doc.name = 111;

const instance = axios.create({
    baseURL: `http://152.136.208.123:8080/api/`,
    timeout: 1000000,
    withCredentials: false,
    headers: {
        'token': localStorage.getItem("token")
    }
})

instance.interceptors.request.use( // 请求拦截
    (request: AxiosRequestConfig) => {
        if (!request.headers.token) {
            if (window.location.pathname.toUpperCase() !== "/LOGIN") {
                window.location.href = "/Login";
            }
        } else {
            if (window.location.pathname.toUpperCase() === '/') {
                window.location.href = '/volume';
            }
        }
        return request
    },
    (error: AxiosError) => {
        return Promise.reject(error)
    }
)

instance.interceptors.response.use( // 回复拦截，主要针对部分回掉数据状态码进行处理
    (response: AxiosResponse) => {
        return response
    },
    (error: AxiosError) => {
        return Promise.reject(error)
    }
)

export default instance;