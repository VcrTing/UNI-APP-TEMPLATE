
import { storage } from '@/tool/web/storage';
import { Store, createStore } from 'vuex';

const _STORAGE_PREFIX: string = 'REPORT_DATA_PAGE_'

const _reportDataPageStore: Store<ReportDataPageStore> = createStore({
    
    state: <ReportDataPageStore> {
        index: -1,
        item: <ONE> { },
        columns: <MANY> [ ],
        
        code: '',
        schema: <ONE> { }
    },
    getters: {
        g_code: (s: ReportDataPageStore) => {
            if (s.code) return s.code;
            const _c: string | undefined = storage.get(_STORAGE_PREFIX + 'code')
            if (_c) s.code = _c;
            return _c
        }
    },
    mutations: {
        change: (s: ONE, v: ANYS) => s[ v[0] ] = v[1]
    },
    actions: {
        change: (c: ONE, v: ANYS) => c.state[ v[0] ] = v[1],

        set_columns: ({ state }, v: MANY) => {
            state.columns = v
        },

        
    }
})

export const reportDPState = _reportDataPageStore.state
export const reportDBDispatch = _reportDataPageStore.dispatch