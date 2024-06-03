<template>
	<page-meta :root-font-size="uiState.root_font_size_coefficient + 'px'" style="display: block;"/>
    <!-- APP 配置，这东西固定写这里，不能去掉 -->
	<index-layout>
		<!--<ViewUi/> -->
		<ViewTestReport/>
	</index-layout>
</template>

<script setup lang="ts">
import { uiState } from '@/memory/global';
import ViewTestReport from '@/view/business/report/test/ViewTestReport.vue';
import ViewUi from '@/view/test/ui/ViewUi.vue';
import GlobalVuex from '@/view/test/vuex/GlobalVuex.vue';
</script>