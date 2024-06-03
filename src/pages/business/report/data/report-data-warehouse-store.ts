
import server_report_schema from '@/server/business/report/server_report_schema';
import report_model_util from '@/tool/business/report/report_model_util';
import { future, promise } from '@/tool/util/future';
import { is_nice_arr, is_nice_one, must_arr } from '@/tool/util/valued';
import { storage } from '@/tool/web/storage';
import { Store, createStore } from 'vuex';

const _REPOET_WAREHOUSE_PREFIX = "REPOET_WAREHOUSE_STORE_"

const __storage = {
    get: (): REPORT_SCHEMAS | undefined => storage.get(_REPOET_WAREHOUSE_PREFIX + 'schemas'),
    set: (ss: REPORT_SCHEMAS) => storage.set(_REPOET_WAREHOUSE_PREFIX + 'schemas', ss)
}

// 取出某个结构，磁盘穿透
const __get_schema = (state: ReportDataWarehouseStore, code: string | undefined): ReportSchema[] | undefined => {
    if (code) {
        // 先从内存获取
        let schemas: REPORT_SCHEMAS | undefined = state.schemas
        if (schemas && is_nice_one(schemas)) {
            return schemas[ code ]
        }
        // 内存没有，从磁盘内获取
        else {
            schemas = __storage.get()
            if (schemas && is_nice_one(schemas)) {
                state.schemas = schemas
                return schemas[ code ]
            }
            else {
                console.log('这个结构磁盘里都没有，code =', code)
            }
        }
    }
    else console.log('report.warehouse.actions.get_schema 没传入 code !!!');
    return undefined
}

// 保存 某个 结构，并且刷新到磁盘
const __save_schema = (state: ReportDataWarehouseStore, code: string | undefined, v: ReportSchema[]): boolean => {
    if (code && is_nice_arr(v)) { 
        state.schemas[ code ] = v; 
        // 刷新 磁盘
        __storage.set(state.schemas); return true
    }
    return false
}

const _reportDataWarehouseStore: Store<ReportDataWarehouseStore> = createStore({
    
    state: <ReportDataWarehouseStore> {
        
        schemas: <REPORT_SCHEMAS>{

        }
    },
    getters: {
        
    },
    mutations: {
        change: (s: ONE, v: ANYS) => s[ v[0] ] = v[1]
    },
    actions: {
        change: (c: ONE, v: ANYS) => c.state[ v[0] ] = v[1],

        // 存入 结构
        save_schema: ({ state }, v: ANYS): boolean => __save_schema(state, v[0], v[1]),
        // 取出 结构
        get_schema: ({ state }, code: string | undefined): ReportSchema[] | undefined => __get_schema(state, code),

        // 首次加载页面，对于结构的获取操作
        init_schema: async ({ state }, code: string | undefined): Promise<ReportSchema[] | undefined> => future(async () => {
            
            // 先从内存 + 磁盘 内获取一次了
            const schema: ReportSchema[] | undefined = __get_schema(state, code)
            if (schema && is_nice_arr(schema)) { return schema }

            // 磁盘里没有，只能从网络获取
            const res: MANY = await server_report_schema.schemas( code )
            if (is_nice_arr(res)) {

                const __src: ReportSchemaOrigin[] = res as ReportSchemaOrigin[ ]
                const __res: ReportSchema[] = [ ]

                // 多个进行 序列化
                __src.map((e: ReportSchemaOrigin) => {
                    console.log('雪莲花 之前的 schema =', e)
                    const _one: ReportSchema | undefined = report_model_util.ser_schema(e)
                    console.log('雪莲花 之后的 schema =', _one)
                    if (_one && is_nice_one(_one)) { __res.push(_one) }
                })     

                // 储存 + 返回
                if (is_nice_arr(__res)) {
                    // 第 0 个主动展示
                    __res[0].__tab_iive = true
                    __save_schema(state, code, __res)
                    return __res
                }
                else {
                    console.log('序列化 Schema origin 失败', __res)
                }
            }
            else {
                console.log('网络连接错误，没有 origins')
            }
            // 啥都没获取到
            return undefined
        })
    }
})

export const reportWareHouseState = _reportDataWarehouseStore.state
export const reportWareHouseDispatch = _reportDataWarehouseStore.dispatch