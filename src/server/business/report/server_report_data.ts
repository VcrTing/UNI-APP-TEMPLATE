import http from "@/tool/http/http"
import { is_arr, is_obj, is_str } from "@/tool/util/typed"

const page = async (data: ONE|ReportDataPageGetParam): ONE_PROMISE => {
    const src: NET_RES = await http.company.pos('report_iist', null, data)
    if (is_str(src)) {
        console.log("弹出错误 =", src)
        return { }
    }
    const res: ONE | MANY = (src as HttpResult).result
    console.log('page 数据 =', res)
    return is_arr(res) ? { } : (res as ONE)
}

export default {
    page
}