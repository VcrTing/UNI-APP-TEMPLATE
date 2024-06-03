
interface ReportDataPageStore {
    // 数据所对应的 index
    index: number,
    // 数据
    item: ONE,

    // 用于展示 table 的 columns 配置
    columns: ONE,

    // 报表所属 ID CODE
    code: string,
    // 报表结构
    schema: ONE,
}


type REPORT_DATA_PAGE_STORE_FIELD = 
    'item' | 'columns'

type REPORT_DATA_PAGE_STORE_DISPATCH = 
    'set_columns' | 'change'