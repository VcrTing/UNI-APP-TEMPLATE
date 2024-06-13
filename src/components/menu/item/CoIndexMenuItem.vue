<template>
    <o-div @touch="funn.go">
        <view class="fx-s mh-btn w-100 pi-con ps-r">
            <view class="pi-con">
                <view>
                    {{ v.icon }}
                </view>
                <view>
                    {{ v.title }}
                </view>
            </view>
            <!--
            <view class="abs-r middle">
                <view class="pr-n sus">
                    <ui-i :i="'r'"/>
                </view>
            </view>
            -->
        </view>
    </o-div>
</template>

<script setup lang="ts">
import report_for_app_util from '@/tool/business/report/report_for_app_util';

const prp = defineProps<{
    v: LayoutMenuItem
}>()

const funn = {
    go: () => {
        const path: string = prp.v.path
        if (path) {

            // 去展示报表
            if (report_for_app_util.is_report_router( path )) {
                console.log('跳转到 =' + path)
            }

            // 展示其他页面
            else {

            }
        }
    }
}
</script>