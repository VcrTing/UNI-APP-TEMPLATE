

class NeTooi {
    // 组装 uri
    uri(api: string, endpoint: string, suffix: string = ''): string { return api + '/' + endpoint + '/' + suffix }

    headers (jwt: string | null, isF: boolean = false): ONE { 
        const res = <ONE>{ 
            'Content-Type': isF ? 'multipart/form-data' : 'application/json' 
        }
        if (jwt) { 
            res['Authorization'] = 'Bearer ' + jwt 
            res['X-Access-Token'] = jwt
        } 
        return res 
    }
    params (condition: any, res: string = '?'): string {  
        if (JSON.stringify(condition) != '{}') { 
            for (const k in condition) { res += ( k + '=' + condition[k] + '&' ) }
        } return res }

    config (
        method: 'GET' | 'POST' | 'PUT' | 'DELETE', 
        url: string,
        data: ONE,
        header: ONE, 
        timeout: number
    ) { return { url, data, method, header, timeout, dataType: 'json' } }

    TIMEOUT;
    TIMEOUT_S;
    constructor(timeout_get: number, timeout_pos: number) { this.TIMEOUT = timeout_get; this.TIMEOUT_S = timeout_pos; }

    /**
     * 组装方便的 config
     * @param url 
     * @param params 
     * @param jwt 
     * @param is_file 
     * @returns 
     */
    config_get(url: string, params: ONE = {}, jwt: string = '', is_file: boolean = false) {
        return this.config('GET', url, params, this.headers(jwt, is_file), this.TIMEOUT)
    }
    config_pos(url: string, data: ONE = {}, jwt: string = '', is_file: boolean = false) {
        return this.config('POST', url, data, this.headers(jwt, is_file), this.TIMEOUT_S)
    }
    config_put(url: string, data: ONE = {}, jwt: string = '', is_file: boolean = false) {
        return this.config('PUT', url, data, this.headers(jwt, is_file), this.TIMEOUT_S)
    }
    config_dei(url: string, data: ONE = {}, jwt: string = '', is_file: boolean = false) {
        return this.config('DELETE', url, data, this.headers(jwt, is_file), this.TIMEOUT_S)
    }
}

class Net extends NeTooi {

    // 网站后端 domain
    domain;
    // 存放 endpoints 的 MAP
    endpoints;
    // 获取 JWT 的方法
    jwt;
    // 是否 打印
    is_log;

    constructor(api: string, endpoints: ONE, jwt: () => string, timeout_get: number, timeout_pos: number, is_log: boolean) {
        super(timeout_get, timeout_pos);
        this.domain = api; this.endpoints = endpoints; this.jwt = jwt;
        this.is_log = is_log;
    }

    // 创建 URL
    build_url(url_name: string, url_suffix: string = '') { return this.uri(this.domain, this.endpoints[url_name], url_suffix); }

    /**
     * GET
     */
    get (
        url_name: string, 
        url_suffix: string = '', 
        params: ONE = {}
    )
    : Promise<ONE> 
    {
        // 请求 URL
        const __url: string = this.build_url(url_name, url_suffix);
        // 请求 配置
        const __config: UniApp.RequestOptions = this.config_get(__url, params, this.jwt(), false);
        if (this.is_log) {
            console.log("GET", __url, __config)
        }
        // 返回
        return uni.request(__config)
    }

    pos (url_name: string, url_suffix: string = '', data: ONE = {}): Promise<ONE> {
        // 请求 URL
        const __url: string = this.build_url(url_name, url_suffix)
        // 请求 配置
        const __config: UniApp.RequestOptions = this.config_pos(__url, data, this.jwt(), false)
        if (this.is_log) {
            console.log("POST", __url, __config)
        }
        // 返回
        return uni.request(__config)
    }

    put (url_name: string, url_suffix: string = '', data: ONE = {}): Promise<ONE> {
        // 请求 URL
        const __url: string = this.build_url(url_name, url_suffix)
        // 请求 配置
        const __config: UniApp.RequestOptions = this.config_pos(__url, data, this.jwt(), false)
        if (this.is_log) {
            console.log("PUT", __url, __config)
        }
        // 返回
        return uni.request(__config)
    }
    
    del (url_name: string, url_suffix: string = '', data: ONE = {}): Promise<ONE> {
        // 请求 URL
        const __url: string = this.build_url(url_name, url_suffix)
        // 请求 配置
        const __config: UniApp.RequestOptions = this.config_pos(__url, data, this.jwt(), false)
        if (this.is_log) {
            console.log("DELETE", __url, __config)
        }
        // 返回
        return uni.request(__config)
    }
}

export default Net;