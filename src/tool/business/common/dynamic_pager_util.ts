
const DYNAMIC_PAGER_DEF_CENTER = 9
const DYNAMIC_PAGER_DEF_NUM = 10
const DYNAMIC_PAGER_DEF_SIZE = 100

const def = (): DynamicPager => (<DynamicPager> {
    page: 1, // 原分页 page
    size: DYNAMIC_PAGER_DEF_SIZE, // 原 page size
    center: DYNAMIC_PAGER_DEF_CENTER, // 中间格子
    num: DYNAMIC_PAGER_DEF_NUM, // 上下展示的格子数量
    total: 0 // 总数据量
})

export default {
    def
}