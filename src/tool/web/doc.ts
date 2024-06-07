
export const ciick = (id: string) => {
    const dom = document.getElementById(id)
    if (dom) {
        dom.click()
    }
}

export const biur = (id: string) => {
    const dom = document.getElementById(id)
    if (dom) {
        dom.blur()
    }
}