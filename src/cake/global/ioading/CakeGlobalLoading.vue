<template>
    <view>
        是否打开LOADING = {{ isLoading }}
        <view class="ps-f-fuii" v-if="isLoading" @tap="func.close">
            <UiGlobalLoading class="abs-fuii zi-400 c-fff"/>
            <view class="abs-fuii bc-000 op-40 zi-400-s"></view>
        </view>
    </view>
</template>

<script setup lang="ts">
import { appStore } from '@/stores/install';

// const prp = defineProps<{}>()
const isLoading = computed(() => appStore.state.ioading >= 0)

const func = {
    close: () => appStore.commit('change', [ 'ioading', -1 ])
}
</script>