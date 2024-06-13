<template>
    
    <view class="o-h br-s report-table">
        <o-table 
            :clazz_tbody="'report-table-tbody'" 
            :ioading="aii.ioading" 
            :columns="columns" :datas="datas"

            @sort="funn.sort"
            @dbtouch="funn.view_detail"
            />
    </view>

</template>

<script setup lang="ts">
import { reportDWDispatch } from '@/pages/report/_memory/report-page-working-store';
import pan_tooi from '@/tool/app/pan_tooi';
import { future } from '@/tool/util/future';

const prp = defineProps<{
    schema: ReportSchema,
    aii: ONE,
    datas: MANY[],
    columns: OTableColumn[]
}>()
const emt = defineEmits([ 'refresh' ])

const funn = {
    
    // 排序
    sort: (vv: string[]) => {
        prp.schema.__tab_sort_key = vv[0]
        prp.schema.__tab_sort_value = vv[1]
        emt('refresh')
    },

    // 查询详情
    view_detail: (params: ANYS) => future(async () => {
        console.log("view table detail param =", params)
        await reportDWDispatch('change', [ 'index', params[0] ])
        await reportDWDispatch('change', [ 'item_key', params[2] ])
        await reportDWDispatch('change', [ 'item_key_value', params[3] ])
        await reportDWDispatch('change', [ 'columns', params[4] ])

        pan_tooi.open_def_r(0, undefined)
    }),
}
</script>