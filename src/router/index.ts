import routes from './routers';
import { IRoute } from './routers';
/**
 *
 * 将路由转换为一维数组
 * @param routeList 路由
 * @param deep 是否深层转化
 * @param auth 路由是否需要检查授权, 路由配置的auth优先级比这里高
 */
export function flattenRoute(
    routeList: IRoute[],
    deep: boolean,
    auth: boolean
): IRoute[] {
    const result: IRoute[] = [];

    for (let i = 0; i < routeList.length; i += 1) {
        const route = routeList[i];

        result.push({
            ...route,
            auth: typeof route.auth !== 'undefined' ? route.auth : auth
        });

        if (route.children && deep) {
            result.push(...flattenRoute(route.children, deep, auth));
        }
    }

    return result;
}

function getLayoutRouteList(): IRoute[] {
    return flattenRoute(routes, false, false);
}

function getWebRouteList(): IRoute[] {
    const routeList = routes.filter(route => route.path === '/');

    if (routeList.length > 0) {
        return flattenRoute(routeList, true, true);
    }
    return [];
}

function getSystemRouteList(): IRoute[] {
    const routeList = routes.filter(route => route.path === '/system');

    if (routeList.length > 0) {
        return flattenRoute(routeList, true, false);
    }
    return [];
}

export const layoutRouteList = getLayoutRouteList();

export const webRouteList = getWebRouteList();

export const systemRouteList = getSystemRouteList();
