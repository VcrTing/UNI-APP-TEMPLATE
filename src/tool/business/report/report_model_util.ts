
// 雪莲花 结构

import jsoner from "@/tool/util/jsoner"
import { must_arr, ser_str_bool } from "@/tool/util/valued"

const ser_schema_query = (src: RSchemaQueryOrigin): RSchemaQuery => {
    const res = <RSchemaQuery> { }
    
    console.log('alertKeysMap 1 =', src.alertKeysMap)
    if (src.alertKeysMap) {
        res.alertKeysMap = jsoner.parse( src.alertKeysMap )
        console.log('alertKeysMap 2 =', jsoner.parse( src.alertKeysMap ))
    }

    res.alertSql = src.alertSql
    res.company = src.company
    res.defaultValue = src.defaultValue
    res.isHide = ser_str_bool( src.isHide )
    res.isRequired = ser_str_bool( src.isRequired )
    res.options = src.options
    res.paramKey = src.paramKey
    res.paramValue = src.paramValue
    res.priority = src.priority
    res.reportId = src.reportId
    res.type = src.type

    // 自家
    res.__type = src.type
    res.__label = src.paramValue
    res.__value = src.defaultValue
    res.__disable = false
    res.__value_def = src.defaultValue

    // 
    return res
}

const ser_schema = (src: ReportSchemaOrigin): ReportSchema | undefined => {

    if (!src) return undefined

    const res = <ReportSchema> { }

    res.id = src.id
    res.code = src.code + ''
    res.tableName = src.tableName
    if (src.fieldsMap) {
        res.fieldsMap = jsoner.parse( src.fieldsMap)
    }
    res.isDynamicFields = ser_str_bool(src.isDynamicFields)
    res.isImmediatelyQuery = ser_str_bool(src.isImmediatelyQuery)
    res.isLinkForm = ser_str_bool(src.isLinkForm)
    res.levelName = src.levelName
    res.levelNo = src.levelNo

    res.procName = src.procName
    res.sapApiName = src.sapApiName
    if (src.queryParams) {
        const _v: RSchemaQueryOrigin[ ] = must_arr(src.queryParams)
        res.queryParams = _v.map(e => ser_schema_query(e))
    }

    // 自家的
    res.__tab_name = src.tableName
    res.__tab_iive = false
    return res
}

// 获取 查询条件
const get_querys = (src: ReportSchema[]) => {
    
}

export default {
    ser_schema
}