
const parse = <T> (src: string | undefined): T => {
    try {
        if (!src) return <T>{ }
        try {
            return JSON.parse(src)
        } catch (err) {
            return eval('(' + src + ')')
        }
    } 
    catch (err) { return <T>{ } }
}

export default {
    parse
}