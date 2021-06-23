import http from '@utils/http/axios';
import {
    LoginReq,
    LoginRes,
    getUserListReq,
    getUserListRes,
    changePwdReq,
    createUserReq,
    updateUserReq
} from './types';

enum Api {
    login = '/auth/login',
    logout = '/auth/logout',
    createUser = '/user',
    updateUser = '/user/updateUser',
    changePwd = '/user/changePwd',
    getUserList = '/user/getUserList',
    deployRole = '/user/deployRole'
}

/**
 * @description: 用户登录
 */
export function login(params: LoginReq) {
    return http.request<LoginRes>({
        url: Api.login,
        method: 'POST',
        params
    });
}

/**
 * @description: 用户列表
 */
export function getUserList(params: getUserListReq) {
    return http.request<getUserListRes>({
        url: Api.getUserList,
        method: 'GET',
        params
    });
}

/**
 * @description: 修改密码
 */
export function changePwd(params: changePwdReq) {
    return http.request(
        {
            url: Api.changePwd,
            method: 'POST',
            params
        },
        { isTransformRequestResult: false }
    );
}

/**
 * @description: 创建用户
 */
export function createUser(params: any) {
    return http.request(
        {
            url: Api.createUser,
            method: 'POST',
            params
        },
        { isTransformRequestResult: false }
    );
}

/**
 * @description: 修改用户
 */
export function updateUser(params: any) {
    return http.request(
        {
            url: Api.updateUser,
            method: 'POST',
            params
        },
        { isTransformRequestResult: false }
    );
}
