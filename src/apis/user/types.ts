/**
 * @description: 登陆接口参数
 */
export interface LoginReq {
    account: string;
    password: string;
}

export interface LoginRes {
    token: string;
    username: string;
    menuList: [];
}

export interface getUserListReq {
    page: number;
    pageSize: number;
    username?: string;
    mobile?: string;
    status?: number;
    ifManage?: number;
    ifDelete?: number;
    created?: string;
    updated?: string;
}

export interface user {
    id: number;
    username: string;
    email?: string;
    mobile?: string;
    ifManager: number;
    status: number;
    remark?: string;
    isDelete: number;
    createdAt: string;
    updatedAt: string;
    roles: any[];
}

export interface getUserListRes {
    list: user[];
    total: number;
    page: number;
    pageSize: number;
}

export interface changePwdReq {
    id: number;
    password: string;
}

export interface createUserReq {
    username: string;
    password: string;
    roles?: string;
    email?: string;
    mobile?: string;
    ifManager: number;
    status: number;
    remark?: string;
    isDelete: number;
}

export interface updateUserReq {
    id: number;
    email?: string;
    mobile?: string;
    ifManager: number;
    status: number;
    remark?: string;
    isDelete: number;
    roles?: string;
}
