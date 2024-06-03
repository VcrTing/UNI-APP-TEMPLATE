<template>
    <view class="bg-pag h-100">
        <view class="bg-con">

            <view class="pt pb-s">
                <view class="fx-i">
                    <o-f-i :i="'i'"></o-f-i>
                    <text class="header-s">报表</text>
                </view>
            </view>

            <!-- TABS -->
            <view class="">
                <view v-for="(v, i) in report.schemas" :key="i">
                    <view class="d-ib">
                        <o-div :clazz="v.__tab_iive ? 'btn-pri-iht' : ''">
                            <view class="px-x2 py">
                                {{ v.tableName }}
                            </view>
                        </o-div>
                    </view>
                </view>
            </view>
        </view>
        
        <view class="pt-row px-row">

            <!-- QUERY -->
            <view class="con">

                <view v-for="(v, i) in report.schemas" :key="i">
                    <view class="pb-s" v-for="(j, k) in v.queryParams" :key="k">
                        <view class="fx-i">
                            <text class="mw-6em ta-r">{{ j.__label }}：</text> 
                            <view class="pi fx-1">

                                <co-br-query-inputer
                                    :src="j"
                                />
                            </view>
                        </view>
                    </view>
                </view>

                <!-- 查询按钮 -->
                <view class="row fx-r pt">
                    <view class="px-row-s">
                        <o-button :clazz="'d-ib mw-8em'">查询</o-button>
                    </view>
                    <view class="px-row-s">
                        <o-button-out :clazz="'d-ib'">重置</o-button-out>
                    </view>
                </view>
            </view>


            <!-- 全选的东西 -->
            
        </view>

        <view class="pt-row px-row">

            <!-- 表单 -->
            <view class="br o-h bg-con">
                <o-table :columns="report.columns" :datas="report.datas"/>
            </view>
        </view>

        <view class="pt"></view>
    </view>
</template>

<script setup lang="ts">
import { uiDispatch } from '@/memory/global';
import { reportDBDispatch } from '@/pages/business/report/data/report-data-page-store';
import { reportWareHouseDispatch } from '@/pages/business/report/data/report-data-warehouse-store';
import { future } from '@/tool/util/future';
import { must_arr } from '@/tool/util/valued';

// 这个 CODE 是必须先准备好的
const code = ref('1651716406')

const aii = reactive({
    ioading: true
})

const report = reactive({
    schemas: <ReportSchema[]> { },
    querys: <ReportSchema[]> [ ],
    columns: <OTableColumn[]> [ ],
    datas: <MANY[]> [
        [
            { 物料编码: "BES25SWQA001", 物料名称: "裙子", 库存量: "1.00", 单位: "米" },
            { 物料编码: "BPS24WWKA001", 物料名称: "牛牛", 库存量: "2500.00", 单位: "米" },
            { 物料编码: "DXH25SUMC001", 物料名称: "赛博朋克柳钉个性马甲", 库存量: "8991.00", 单位: "件" },
            { 物料编码: "DXH22SWKA001", 物料名称: "前中线直筒裤", 库存量: "1036.00", 单位: "米" },
            { 物料编码: "XX009", 物料名称: "通用线", 库存量: "186.00", 单位: "米" }
        ]
    ]
})

const func = {

    init: () => future(async () => {
        const _code: string = code.value
        if (_code) {
            
            // 获取结构
            const _shemas: ReportSchema[ ] | undefined = await reportWareHouseDispatch('init_schema', _code)
            if (_shemas) {
                report.schemas = _shemas
                console.log('获得到的结构 =', _shemas)
            } else {
                console.log('没获取到，跳转登录')
                // goLogin()
            }

            await func.init_columns()
        }
        else {
            console.log("CODE 没有准备好，跳转登录")
        }
    }),
    
    init_columns: () => future(async () => {
        const _c = <OTableColumn[]>[
            { dataIndex: "#", freeze: false, width: "50", title: "#", align: "center", __w: 0, __class: '', __style: <ONE>{} },
            { dataIndex: "物料编码", freeze: true, width: "120", title: "物料编码", align: "center", __w: 0, __class: '', __style: <ONE>{} },
            { dataIndex: "物料名称", freeze: false, width: "120", title: "物料名称", align: "center", __w: 0, __class: '', __style: <ONE>{} },
            { dataIndex: "库存量", freeze: false, width: "120", title: "库存量", align: "center", __w: 0, __class: '', __style: <ONE>{} },
            { dataIndex: "单位", freeze: false, width: "120", title: "单位", align: "center", __w: 0, __class: '', __style: <ONE>{} },
        ] 

        const _columns: OTableColumn[] | undefined = await func.ser_columns(_c);
        if (_columns) {
            report.columns = _columns

            const _data = [ ]
            for (let i= 0; i< 1000; i++ ) {
                _data.push({ 物料编码: "XX009", 物料名称: "通用线", 库存量: "186.00", 单位: "米" })
            }
            report.datas.push( _data )
        }
    }),
    ser_columns: async (cols: OTableColumn[]): Promise<OTableColumn[] | undefined> => {
        for (const col of cols) {
            const _w: number = await uiDispatch('scale_px', col.width)
            col.__style = { 'width': _w + 'px' }
            col.__class = 'ta-c ' + col.align + ' ' + (col.freeze ? 'td-freeze' : '')
            col.__w
        }
        return cols;
    }
}

nextTick(func.init)
</script>