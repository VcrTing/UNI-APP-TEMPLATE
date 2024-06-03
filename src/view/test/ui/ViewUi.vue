<template>
    <view>
        <view class="px">
            <!-- 文字 -->
            <view class="py pri-tih">
                <text class="h1 b">H1</text>
                <text class="h2 b">H2</text>
                <text class="h3 b">H3</text>
                <text class="h4 b">H4</text>
                <text class="h5 b">H5</text>
                <text class="h6 b">H6</text>
                <text class="h7 b">H7</text>
                <text class="h8 b">H8</text>
                <text class="h9 b">H9</text>
            </view>
            <!-- 按钮 -->
            <view class="py">
                <o-button @touch="func.touch('pri')">弹出一个 Mod</o-button>
                <o-button-out @touch="func.touch('pri out')">弹出一个 Pan</o-button-out>
                <o-button-iht @touch="func.touch('pri iht')">弹出一个 Err</o-button-iht>
            </view>
        <view class="py">
            <!-- TABLE -->
            <view class="py">
                <view class="b pri-tih h5">Table 要求功能</view>
                <view class="py-s sec-tit">1. 冻结列，2. 标题悬浮，3. 标题排序，4. 全选（搁置）</view>
            </view>
            <view class="py">
                <view class="fx-r">
                    <co-filter-button @touch="pan.view_filter"/>
                </view>
            </view>
            <view class="py">
                <view class="br o-h">
                    <test-o-table :ioading="aii.ioading" @dbtouch="pan.view_detail"/>
                </view>
                <view>
                    <o-button class="w-100" @touch="func.ioad">加载</o-button>
                </view>
            </view>
        </view>
            <!-- DIV -->
            <view class="py">
                <o-div :clazz="'mb d-ib'" @touch="pan.open('t')">弹出顶部 Pan</o-div>
                <o-div :clazz="'mb d-ib'" :clazz_inner="'px py'" @touch="pan.open('r')">弹出右边 Pan</o-div>
                <o-div
                    :clazz_inner="'py-s px'" 
                    :clazz="'mb btn fx-aii-btn-pri-iht pri d-ib'" @touch="func.touch('pri')">Fx DIV Pri Iht</o-div>
                <o-div
                    :clazz_inner="'py-s px'" 
                    :clazz="'mb btn fx-aii-btn-pri-out pri d-ib'" @touch="func.touch('pri')">Fx DIV Pri Out</o-div>
            </view>
            <!-- 输入框 -->
            <view class="py">
                <view>
                    <o-input :label="''" :err="''"/>
                </view>
                <view class="pt">
                    <o-input-s :label="''"/>
                </view>
            </view>
            <!-- 文字 -->
            <view class="py">
                <view>
                    <text class="tih pr">TIH</text>
                    <text class="tit pr">TIT</text>
                    <text class="tid pr">TID</text>
                    <text class="tis pr">TIS</text>
                </view>
                <view>
                    <text class="pri pr">PRI</text>
                    <text class="pri-tih pr">PRI-TIH</text>
                </view>
                <view>
                    <text class="sec-tih pr">SEC-TIH</text>
                    <text class="sec-tit pr">SEC-TIT</text>
                    <text class="sec-tid pr">SEC-TID</text>
                    <text class="sec-tis pr">SEC-TIS</text>
                </view>
                <view>
                    <text class="cot pr">COT</text>
                    <text class="cot pr">COT</text>
                    <text class="cod pr">COD</text>
                    <text class="cos pr">COS</text>
                </view>
            </view>
            <!-- 背景色 -->
            <view class="br o-h my">
                <view class="fx-c">
                    <view class="view-ui-box bg-sec-n">
                        <text class="sec-tit">背景色-主1</text>
                    </view>
                    <view class="view-ui-box bg-sec">
                        <text class="sec-tit">背景色-主</text>
                    </view>
                </view>
                <view class="fx-c">
                    <view class="view-ui-box bg-sec-t">
                        <text class="sec-tit">背景色-小</text>
                    </view>
                    <view class="view-ui-box bg-sec-s">
                        <text class="sec-tit">背景色-次</text>
                    </view>
                </view>
            </view>
            <!-- ICON -->
            <view class="py">
                <view class="fx-i">
                    <text>图标：</text>
                    <o-f-i :i="'x'" :clazz="'sec-tit'" @touch="pan.close(0)"></o-f-i>
                    <o-f-i :i="'i'" :clazz="'sec-tit'" @touch="pan.close(0)"></o-f-i>
                    <o-f-i :i="'r'" :clazz="'sec-tit'" @touch="pan.close(0)"></o-f-i>
                    <o-f-i :i="'a-i'" :clazz="'sec-tit'" @touch="pan.close(0)"></o-f-i>
                    <o-f-i :i="'menu'" :clazz_ripie="'bg-pri-iht'" :clazz="'pri'" @touch="pan.close(0)"></o-f-i>
                    <o-f-i :i="'a-r'" :clazz="'fx-aii-btn-pri btn-pri-iht'" @touch="pan.close(0)"></o-f-i>
                </view>
                <view class="fx-i pt-s">
                    <o-button-i :i="'x'">关闭</o-button-i>
                    <o-button-i :clazz="'btn-pri'" :i="'a-i'">返回</o-button-i>
                </view>
            </view>
            <!-- 状态 -->
            <view class="py">
                <view>
                    <text class="war pr">WAR</text>
                    <text class="err pr">ERR</text>
                    <text class="tid pr">TID</text>
                    <text class="tis pr">TIS</text>
                </view>
                <view>
                    <text class="pri pr">PRI</text>
                    <text class="pri-tih pr">PRI-TIH</text>
                </view>
                <view class="py-s">
                    <view class="bg-war px py-s br fx-hv-bg-war fx-fcs-bg-war">
                        <view class="war">警告，您的网络连接错误，请重试。</view>
                    </view>
                </view>
                <view class="py-s">
                    <view class="bg-err px py-s br fx-hv-bg-err fx-fcs-bg-err">
                        <view class="err">警告，您的网络连接错误，请重试。</view>
                    </view>
                </view>
            </view>
        </view>

        <view class="py-x2"></view>


        <o-pan :idx="0">
            <o-pan-inner :idx="0">
                <ViewBReportPanItemDetail/>
            </o-pan-inner>
        </o-pan>
        <o-pan :idx="1">
            <o-pan-inner :idx="1">
                <ViewBReportPanFilter/>
            </o-pan-inner>
        </o-pan>
    </view>
</template>

<script setup lang="ts">
import pan_tooi from '@/tool/app/pan_tooi';
import ViewBReportPanItemDetail from '../../business/report/table/pan/ViewBReportPanItemDetail.vue'
import ViewBReportPanFilter from '../../business/report/table/pan/ViewBReportPanFilter.vue'
import { reportDBDispatch } from '@/pages/business/report/data/report-data-page-store';
import { future } from '@/tool/util/future';
import TestOTable from './table/TestOTable.vue';

const aii = reactive({
    ioading: false
})
// const prp = defineProps<{}>()

const pan = {
    view_detail: (params: ANYS) => future(async () => {
        console.log("params =", params)
        await reportDBDispatch('change', [ 'index', params[0] ])
        await reportDBDispatch('change', [ 'item', params[1] ])
        pan_tooi.open_def_r(0, false)
    }),
    view_filter: () => future(async () => {
        pan_tooi.open_def_b(1, false)
    }),
    close: (idx: number) => pan_tooi.close_pan(idx)
}

const func = {
    touch: (s: string) => {
        console.log("按钮点击了 =", s)
    },
    ioad: () => {
        aii.ioading = true
        setTimeout(() => {
            aii.ioading = false
            console.log('加载完成')
        }, 3000)
    }
}
</script>

<style lang="sass">
.view-ui-box
    width: 50%
    height: 12vw
    display: flex
    align-items: center
    justify-content: center
</style>