import { IS_NET_LOG, IS_TEST_MODE } from "./config"

// 全局 主响应 URI
export const NET_URI = IS_TEST_MODE ? 'http://127.0.0.1:8081' : ''
// 全局 主响应 的 API
export const NET_URI_API = IS_TEST_MODE ? 'jeecg-boot' : 'jeecg-boot'

export const NET_TIMEOUT_GET = 1000 * 10

export const NET_TIMEOUT_POS = 1000 * 5

export const NET_IS_LOG = IS_NET_LOG

// 获取 JWT 的方法
export const NET_FUNCTION_GET_JWT: () => string = (): string => {
    return '';
}

/**
 * ====================================================================================================
 */

// 认证
const endpoint_auth = {
    
}

// 网站的 endpoint
export const NET_ENDPOINTS: ONE = {
    ...endpoint_auth
}