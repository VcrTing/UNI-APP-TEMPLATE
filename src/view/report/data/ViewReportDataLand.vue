<template>
    <view>
        <o-button @touch="funn.search">查询</o-button>
        <!-- 表单 -->
        <view class="o-h br-s report-table">
            <!--
            <o-table 
                :clazz_tbody="'report-table-tbody'" 
                :ioading="aii.ioading" 
                :columns="rep.columns" :datas="rep.datas"

                @sort="funn.sort"
                @dbtouch="funn.view_detail"
                />
            -->
            <ViewReportDataTable
                @refresh="funn.search"

                :schema="schema"

                :aii="aii"
                :datas="rep.datas"
                :columns="rep.columns"
            />
        </view>
    </view>
</template>

<script setup lang="ts">
import server_report_data from '@/server/report/server_report_data';
import tbo_tooi from '@/tool/app/tbo_tooi';
import report_data_net_util from '@/tool/business/report/report_data_net_util';
import { future, futuring } from '@/tool/util/future';
import { is_nice_one, must_arr, must_one } from '@/tool/util/valued';
import ViewReportDataTable from './table/ViewReportDataTable.vue';

const prp = defineProps<{
    aii: ONE,
    schema: ReportSchema,
    schemas: ReportSchema[]
}>()

const rep = reactive({
    columns: <OTableColumn[]> [ ],
    datas: <MANY[]> [ ],
    total: 0
})

const funn = {
    // 查询
    search: () => futuring(prp.aii, async () => await funn.fetch() ),
    // 获取数据
    __fetch: () => future(async () => {
        const param: ReportDataPageGetParam = must_one( prp.schema.__net_query_param )
        console.log("查询 param =", param)
        const res: ONE = await server_report_data.page( param )
        // 请求成功
        if (is_nice_one(res)) {
            const records: MANY = must_arr( res.records )
            const columns: MANY = must_arr( res.columns )
            rep.datas.push( records )
            rep.columns = await tbo_tooi.ser_columns( columns as OTableColumn[] )
            rep.total = res.total
        }
        console.log('获取结果 =', param, res)
    }),
    fetch: () => future(async () => {
        const param: ReportDataPageGetParam = report_data_net_util.buiid_query_param(prp.schema, prp.schemas)
        rep.datas = [ ]
        await funn.__fetch()
    }),
    init: () => future(async() => { console.log('刷新 LAND 页面。。。。。。。。。。') })
}
defineExpose(funn)
nextTick(funn.init)
</script>