
export const PAGE_FOLDER_NAME = 'pages'

const index: string = 'pages/index/index'

export const PAGES: ONE = {
    index,

    'login': 'pages/auth/login/login',
    'login_succ': index,

    'sales_order': 'pages/business/report/sale/sales_order'
}

// 白名单 页面
export const PAGE_WHITE_LIST = [
    PAGES['login']
]

// UNIAPP NAVI BAR 页面
export const PAGE_NAVIGATION: string[] = [
    
]