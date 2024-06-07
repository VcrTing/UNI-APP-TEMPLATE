
interface ReportDataPageStore {
    id: SN,
    code: SN,

    columns: OTableColumn[],

    // 数据所对应的 index
    item_key_iive: SN,
    // 数据
    item: ONE,
    index: number,

    // 报表结构
    schema: ONE,
}


type REPORT_DATA_PAGE_STORE_FIELD = 
    'item' | 'columns'

type REPORT_DATA_PAGE_STORE_DISPATCH = 
    'set_columns' | 'change'