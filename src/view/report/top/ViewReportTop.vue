<template>
    
    <co-app-top-bar>
        <view class="pb pt-s">
            <co-app-bar-header :i="'menu'" @tapi="funn.tapi">
                {{ menu.title ? menu.title : '我的报表' }}
            </co-app-bar-header>
        </view>
        <slot>

        </slot>
    </co-app-top-bar>
</template>

<script setup lang="ts">
import { reportDWState } from '@/pages/report/_memory/report-page-working-store';
import { promise } from '@/tool/util/future';

// const prp = defineProps<{}>()

const menu = computed(() => reportDWState.menu)

const funn = {
    tapi: () => promise(() => {

    })
}
</script>