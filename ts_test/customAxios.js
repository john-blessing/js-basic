"use strict";
/**
 * @program: axios 封装
 * @description:
 * @author: Jinjf
 * @date: 2021-09-20 12:55
 **/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
window.GS_Doc.name = 111;
const instance = axios_1.default.create({
    baseURL: `http://152.136.208.123:8080/api/`,
    timeout: 1000000,
    withCredentials: false,
    headers: {
        'token': localStorage.getItem("token")
    }
});
instance.interceptors.request.use(// 请求拦截
(request) => {
    if (!request.headers.token) {
        if (window.location.pathname.toUpperCase() !== "/LOGIN") {
            window.location.href = "/Login";
        }
    }
    else {
        if (window.location.pathname.toUpperCase() === '/') {
            window.location.href = '/volume';
        }
    }
    return request;
}, (error) => {
    return Promise.reject(error);
});
instance.interceptors.response.use(// 回复拦截，主要针对部分回掉数据状态码进行处理
(response) => {
    return response;
}, (error) => {
    return Promise.reject(error);
});
exports.default = instance;
