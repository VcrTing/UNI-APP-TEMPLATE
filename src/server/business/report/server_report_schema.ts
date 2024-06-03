import http from "@/tool/http/http"
import { is_arr, is_str } from "@/tool/util/typed"

const schemas = async (code: string = ''): MANY_PROMISE => {
    if (!code) {
        console.log('弹出错误 =', code)
        return [ ]
    }

    const src: NET_RES = await http.company.get('report_schema', null, { code })
    if (is_str(src)) {
        console.log("弹出错误 =", src)
        return [ ]
    }

    const res: ONE | MANY = (src as HttpResult).result
    if (is_arr(res)) {

    }
    return is_arr(res) ? (res as MANY) : [ ]
}

export default {
    schemas
}