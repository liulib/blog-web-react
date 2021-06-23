// 接口请求示例
import http from '@utils/http/axios';

export interface LoginReq {
    account: string;
    password: string;
}

export interface LoginRes {
    token: string;
    username: string;
    menuList: [];
}

enum Api {
    login = '/auth/login',
    getUserList = '/user/getUserList'
}

// ==> post(put类似) 请求示例 application/x-www-form-urlencoded格式
export function login(params: LoginReq) {
    return http.request<LoginRes>(
        {
            url: Api.login,
            method: 'POST',
            params
        },
        { isParseToJson: false }
    );
}

// ==> post(put类似) 请求示例 application/json格式
export function login1(params: LoginReq) {
    return http.request<LoginRes>({
        url: Api.login,
        method: 'POST',
        params
    });
}
