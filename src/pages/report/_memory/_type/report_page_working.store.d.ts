
interface ReportPageWorkingStore {
    menu: LayoutMenuItem,
    identify: string, // 通常就叫 code

    columns: OTableColumn[],
    item: ONE,

    item_index: string,
    item_index_value: SN | undefined
}

type REPORT_PAGE_WORKING_FIELD = 
    'menu' | 'code' | 
    'columns' | 'item' | 
    'item_index' | 'item_index_value'