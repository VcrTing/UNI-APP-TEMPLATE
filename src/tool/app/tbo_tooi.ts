import { uiDispatch } from "@/memory/global"
import { future } from "../util/future"

// 奇数
const tr_odd = (index: number) => (index % 2 != 0)
const tr_last = (index: number, data: MANY = []) => ((data.length - 1) == index)

export const tbo_tr_class = (index: number, data: MANY = []) => {
    const src = (tr_odd(index) ? 'tr-odd' : 'tr-even')
    return src + (tr_last(index, data) ? ' tr-last' : '')
}

const ser_columns = async (cols: OTableColumn[] = [ ]): Promise<OTableColumn[]> => {

    for (const col of cols) {

        const _w: number = await uiDispatch('scale_px', col.width)
        col.__class = 'ta-c ' + col.align + ' ' + (col.freeze ? 'td-freeze' : '')
        col.__style = { 'width': _w + 'px' }
        col.__w = _w
    }
    return cols;
}
    
const init_test_columns = async (): Promise<OTableColumn[]> => {
    const cols = await ser_columns(<OTableColumn[]> [
        { dataIndex: "#", freeze: false, width: "50", title: "#", align: "center", __w: 0, __class: '', __style: <ONE>{} },
        { dataIndex: "物料编码", freeze: true, width: "120", title: "物料编码", align: "center", __w: 0, __class: '', __style: <ONE>{} },
        { dataIndex: "物料名称", freeze: false, width: "120", title: "物料名称", align: "center", __w: 0, __class: '', __style: <ONE>{} },
        { dataIndex: "库存量", freeze: false, width: "120", title: "库存量", align: "center", __w: 0, __class: '', __style: <ONE>{} },
        { dataIndex: "单位", freeze: false, width: "120", title: "单位", align: "center", __w: 0, __class: '', __style: <ONE>{} },
    ] )
    return cols ? cols : []
}

export const DESC = 'desc'
export const ASC = 'asc'
export const TBO_SORT_KEY_DEF = '__none__'

// 排序
const pkg_sort_key = (key: string) => ( key ? key : '' )
const pkg_sort_value = (v: string) => ( (v && v.trim().length > 0) ? v.trim() : DESC)
const sort_value = (n: number) => (n <= 0) ? DESC : ASC

export default {
    tr_odd,
    tr_last,
    tbo_tr_class,

    ser_columns,
    init_test_columns,

    pkg_sort_key,
    pkg_sort_value,

    sort_value
}