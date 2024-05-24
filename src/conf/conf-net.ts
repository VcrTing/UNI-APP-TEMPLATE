import { IS_NET_LOG, IS_TEST_MODE } from "./conf"

// 全局 主响应 URI
export const NET_URI_MASTER = IS_TEST_MODE ? 'http://127.0.0.1:8081' : ''
// 全局 公司响应 URI
export const NET_URI_COMPANY = IS_TEST_MODE ? 'http://127.0.0.1:8081' : ''

// 全局 主响应 的 API
export const NET_URI_MASTER_API = IS_TEST_MODE ? 'jeecg-boot' : 'jeecg-boot'
// 全局 公司响应 的 API
export const NET_URI_COMPANY_API = IS_TEST_MODE ? 'jeecg-boot' : 'jeecg-boot'

// GET 超时时间
export const NET_TIMEOUT_GET = 1000 * 10
// POST 超时时间
export const NET_TIMEOUT_POS = 1000 * 5

// 打印 网络连接
export const NET_IS_LOG = IS_NET_LOG

// 获取 JWT 的方法
export const NET_FUNCTION_GET_JWT: () => string = (): string => {
    return '';
}

/**
 * ====================================================================================================
 */

// 数据来源
export const MASTER: string = 'MASTER'
export const COMPANY: string = 'COMPANY'

// 登录认证
const NET_ENDPOINT_AUTH = <ONE>{
    'login': ''
}

// 网站的 endpoint，key 名字和 上面的要对应
export const NET_ENDPOINTS = <ONEO>{
    'MASTER': <ONE>{
        ...NET_ENDPOINT_AUTH
    },

    'COMPANY': <ONE>{

    }
}
