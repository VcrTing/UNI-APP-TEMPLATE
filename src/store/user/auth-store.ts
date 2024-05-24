
import { ROLE_ANON } from '@/conf/conf-role';
import { Store, createStore } from 'vuex';

const authStore: Store<AuthStore> = createStore({
    
    state: <AuthStore>{
        jwts: {

        },
        role: ROLE_ANON
    },
    getters: {
        
    },
    mutations: {
        // 使用案例，vuex.commit('change', [ 'ioading', -1 ])
        // 意思是 把 ioading 改为 -1
        change (state: any, v: ANYS) { state[v[0]] = v[1] },
        
    }
})

export default {
    authStore
}