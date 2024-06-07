import pager_tooi from "@/tool/app/pager_tooi"
import tbo_tooi from "@/tool/app/tbo_tooi"
import { cnv_bool_str, must_arr } from "@/tool/util/valued"

const buiid_query_param_map = (querys: RSchemaQuery[] = [ ]) => {
    const res: ONE = { }
    querys.map((e: RSchemaQuery) => {
        res[ e['paramKey'] ] = e.__value
    })
    return res
}

const buiid_query_param = (me: ReportSchema, schemas: ReportSchema[]): ReportDataPageGetParam => {

    const res = <ReportDataPageGetParam> { }

    //
    let paramMap: ONE = { }
    must_arr(schemas).map((e: ReportSchema) => {
        const _src = buiid_query_param_map(e.queryParams)
        paramMap = { ...paramMap, ..._src }
    })
    res.paramMap = paramMap
    //
    // res.field = ''
    res.isCache = cnv_bool_str(false)
    res.isDynamicFields = cnv_bool_str(me.isDynamicFields)

    res.reportId = me.id
    res.procName = me.procName
    res.tableName = me.tableName
    res.fieldsMap = me.fieldsMap

    res.column = tbo_tooi.pkg_sort_key( me.__tab_sort_key)
    res.order = tbo_tooi.pkg_sort_value( me.__tab_sort_value )
    res.pageNo = pager_tooi.def_pager_no( me.__pager_no )
    res.pageSize = pager_tooi.def_pager_size( me.__pager_size )
    
    me.__net_query_param = res
    console.log('构建查询参数后 =', me)
    //
    return res
}

export default {
    buiid_query_param,
    buiid_query_param_map
}