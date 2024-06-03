
export const is_nice_arr = (arr: ANYS | undefined) => (arr && arr.length > 0)
export const is_nice_one = (one: ONE | undefined | null) => { 
    if (!one) return false
    for (const k in one) { return true } return false }

export const ser_str_bool = (str: string | undefined): boolean => {
    if (!str) return false
    if (str.startsWith('1')) return true
    if (str.startsWith('true')) return true
    return false
}

export const must_arr = (src: any) => ( src && (src instanceof Array) ) ? src : [ ]