
import { Store, createStore } from 'vuex';

const appStore: Store<AppStore> = createStore({
    
    state: <AppStore>{

        // 全局加载标识
        ioading: -1,

        // menu = 0 永远首页
        menu: 0,

        // page = 0 永远首页
        page: 0,

        hui: -1,
        hui_z_index: 495,

        // MOD 占用 500 系列
        mod: -1,
        mod_z_index: 498,

        // PAN 占用 400 系列
        pan: -1,
        pan_z_index: 398,
    },
    getters: {
        // getters 里面不带 刷新页面的，请求一次获取一次状态，值固定的
        // is_ioading (state) { return state.ioading >= 0 },
        is_ioading: s => s.ioading >= 0
    },
    mutations: {
        // 使用案例，vuex.commit('change', [ 'ioading', -1 ])
        // 意思是 把 ioading 改为 -1
        // change (state: any, v: ANYS) { state[v[0]] = v[1] },
        // 从此，去掉 mutations 里面的东西
    },
    actions: {
        // 使用实例 appStore.dispatch('change', [ 'ioading', -1 ])
        // 直接在 actions 里面修改 state, 还能异步
        // actions 里面可以异步，所以，能用 actions 尽量用 actions
        // change: ({ commit, state }, v: ANYS ) => setTimeout(() => commit('change', v), 1),
        change: (c: ONE, v: ANYS) => c.state[ v[0] ] = v[1]
    }
    /*
    actions 使用案例
    ...mapActions([
        'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`
        // `mapActions` 也支持传参数：
        'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`
      ]),
    */
})

export default {
    appStore
}