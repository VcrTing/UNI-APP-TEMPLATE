
type REPORT_SCHEMAS = { [k: string]: ReportSchema[ ] }

interface ReportSchemaOrigin {
    id: number,
    code: number,
    tableName: string,

    fieldsMap: string,
    isDynamicFields: string,
    isImmediatelyQuery: string,

    isLinkForm: string,
    linkFormId: string,
    linkFormParam: string,

    levelName: string,
    levelNo: number,

    procName: string,
    queryParams: RSchemaQueryOrigin[ ],

    sapApiName: string,
}

interface ReportSchema {
    id: number,
    code: stirng,
    tableName: string,

    fieldsMap: ONE,
    isDynamicFields: boolean,
    isImmediatelyQuery: boolean,

    isLinkForm: boolean,
    linkFormId: string,
    linkFormParam: string,

    levelName: string,
    levelNo: number,

    procName: string,
    queryParams: RschemaQuery[ ],

    sapApiName: string,

    __tab_name: string,
    __tab_iive: boolean
}


interface RSchemaQueryOrigin {
    alertKeysMap: string
    alertSql: string
    company: string
    defaultValue: SN
    isHide: string
    isRequired: string
    options: string
    paramKey: string
    paramValue: string
    priority: number
    reportId: number
    type: string
}
interface RSchemaQuery {
    alertKeysMap: ONE
    alertSql: string
    company: string
    defaultValue: SN
    isHide: boolean
    isRequired: boolean
    options: string
    paramKey: string
    paramValue: string
    priority: number
    reportId: number
    type: string

    __label: string,
    __type: string,
    __value: SN
    __value_def: SN
    __disable: boolean
}