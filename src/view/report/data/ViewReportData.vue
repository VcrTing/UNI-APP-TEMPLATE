<template>
    <view>
        <view class="px-row soft" v-if="schemas">
            <!-- 表单内容 -->
            <view class="soft" v-for="(sc, i) in schemas" :key="i">
                
                <ViewReportDataLand :schema="sc" :aii="me" :schemas="schemas"/>
            </view>
        </view>

        <view class="">
            <!--
            <o-pan :idx="0">
                <o-pan-inner-x :idx="0" :mxw="'61.8vw'" :close="true">
                    <ViewReportPanTableItemDetail :idx="0" @close="pan_tooi.close_pan(0)"/>
                </o-pan-inner-x>
            </o-pan>
            <o-pan :idx="10">
                <o-pan-inner-y :idx="10" :h="'60vh'" :orientation="'b'">
                    <ViewReportPanTableFilter :schemas="schemas"/>
                </o-pan-inner-y>
            </o-pan>
            -->
        </view>
    </view>
</template>

<script setup lang="ts">
import pan_tooi from '@/tool/app/pan_tooi';
import ViewReportDataLand from './ViewReportDataLand.vue';

const prp = defineProps<{
    deploy: ReportPageDeploy | ONE,
    schemas: ReportSchema[] | undefined
}>()

const me = reactive({
    ioading: false
})
</script>