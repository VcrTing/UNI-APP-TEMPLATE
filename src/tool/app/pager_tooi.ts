
const def_pager_no = (no: number): number => ((no && no > 0) ? no : 1)

const def_pager_size = (sz: number, def: number = 200): number => ((sz && sz > 0) ? sz : def)

export default {
    def_pager_no,
    def_pager_size
}