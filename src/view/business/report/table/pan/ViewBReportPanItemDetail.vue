<template>
    <view class="py ts">
        <view class="pb">
            <view class="header b pi" @tap="emt('close')">您关注的报表</view>
        </view>
        <!-- <o-f-i :i="'x'" :clazz="'sec-tit'" @touch="pan.close(0)">X</o-f-i> -->
        <o-scroll-y>
            <view v-if="columns && item" class="soft py">
                <view

                >
                    <view class="pb soft"
                        v-for="(v, i) in columns" :key="i">
                        <o-div>
                            <view class="pi pr-s">
                                <view class=" py-t">
                                    {{ v.title }}
                                </view>
                                <view
                                    v-if="v.dataIndex != '#'"
                                    class="pi-2em pt-s soft h7">
                                    {{ item[ v.dataIndex ] ? item[ v.dataIndex ] : '(空)' }}
                                </view>
                                <view
                                    v-else
                                    class="pi-2em pt-t soft">
                                    {{ index }}
                                </view>
                            </view>
                        </o-div>
                    </view>
                </view>
            </view>
        </o-scroll-y>
    </view>
</template>

<script setup lang="ts">
import { reportDPState } from '@/pages/business/report/data/report-data-page-store';
import { is_nice_one } from '@/tool/util/valued';

const emt = defineEmits([ 'close' ])

// const prp = defineProps<{}>()
const columns = computed(() => reportDPState.columns)
const index = computed(() => reportDPState.index)
const item = computed((): ONE | undefined => is_nice_one(reportDPState.item) ? reportDPState.item : undefined)

</script>