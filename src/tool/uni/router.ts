



class Router {
    // 统一用绝对路径
    _ser(url: string = '') { return url.startsWith('/') ? url : ('/' + url) }

    // 保留当前页面, 跳转到其他页面
    go (url: string) {
        uni.navigateTo({
            url: this._ser(url)
        })
    }

    // 重定向到 其他页面
    redirect (url: string) {
        uni.redirectTo({
            url: this._ser(url)
        })
    }

    // 重定向到 其他页面，但是关闭所有页面
    launch (url: string) {
        uni.reLaunch({
            url: this._ser(url)
        })
    }

    // 跳转到 导航栏目
    navigator (url: string) {
        uni.switchTab({
            url: this._ser(url)
        })
    }

    // 获取当前页面的 page 数据
    info (): Page.PageInstance {
        const routes = getCurrentPages()
        const route = routes[ routes.length - 1 ]
        return route ? route : { }
    }
}

export default new Router();