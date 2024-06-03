
// 奇数
const tr_odd = (index: number) => (index % 2 != 0)
const tr_last = (index: number, data: MANY = []) => ((data.length - 1) == index)

export const tbo_tr_class = (index: number, data: MANY = []) => {
    const src = (tr_odd(index) ? 'tr-odd' : 'tr-even')
    return src + (tr_last(index, data) ? ' tr-last' : '')
}

export default {
    tr_odd,
    tr_last,
    tbo_tr_class
}