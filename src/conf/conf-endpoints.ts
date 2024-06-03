

/**
 * master ====================================================================================================
 */

// 登录认证
const NET_ENDPOINT_AUTH = <ONE> {
    'login': 'app/cus/login' // 'sys/login'
}
// 测试用例
const NET_ENDPOINT_TEST = <ONE> {
    'timeout': 'zeng_test/timeout'
}

export const NET_ENDPOINTS_MASTER = <ONE> {
    ...NET_ENDPOINT_AUTH,
    ...NET_ENDPOINT_TEST
}

/**
 * company ====================================================================================================
 */

// 商业
const NET_ENDPOINT_BUSINESS = <ONE> {
    'report_iist': 'report/common/getTable',
    'report_schema': 'report/common/tables'
}

export const NET_ENDPOINTS_COMPANY = <ONE> {
    ...NET_ENDPOINT_BUSINESS
}