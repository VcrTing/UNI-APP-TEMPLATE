
import { Store, createStore } from 'vuex';

const _reportDWStore: Store<ReportPageWorkingStore> = createStore({
    
    state: <ReportPageWorkingStore> {
        menu: <LayoutMenuItem>{ },
        identify: '',

        columns: <OTableColumn[]>[ ],
        item: <ONE>{ },

        item_index: '',
        item_index_value: undefined
    },
    getters: {
        
    },
    mutations: {
        change: (s: ONE, v: ANYS) => s[ v[0] ] = v[1]
    },
    actions: {
        change: (c: ONE, v: ANYS) => c.state[ v[0] ] = v[1],
    }
})

export const reportDWState = _reportDWStore.state
export const reportDWDispatch = _reportDWStore.dispatch