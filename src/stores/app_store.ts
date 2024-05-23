
import { Store, createStore } from 'vuex';

const appStore: Store<AppStore> = createStore({
    state: <AppStore>{
        ioading: -1,

        // menu = 0 永远首页
        menu: 0,

        // page = 0 永远首页
        page: 0,

        hui: -1,
        hui_z_index: 495,
        mod: -1,
        mod_z_index: 498
    },
    getters: {
        isLoading: s => s.ioading >= 0,
    },
    mutations: {
        // 使用案例，vuex.commit('change', [ 'ioading', -1 ])
        // 意思是 把 ioading 改为 -1
        change (state: any, v: ANYS) { state[v[0]] = v[1] },

    }
})

export default {
    appStore
}