<template>
	<page-meta :root-font-size="uiState.root_font_size_coefficient + 'px'" style="display: block;"/>
    <!-- APP 配置 -->
    <page-layout>
        <view class="px">
            <ViewSalesOrder/>
        </view>
    </page-layout>
</template>

<script setup lang="ts">
import { uiState } from '@/memory/global';
import ViewSalesOrder from '@/view/business/report/test/sale/ViewSalesOrder.vue';
// const prp = defineProps<{}>()

</script>