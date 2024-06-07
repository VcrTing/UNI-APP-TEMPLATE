<template>
	<page-meta :root-font-size="uiState.root_font_size_coefficient + 'px'" style="display: block;"/>
    <!-- APP 配置，这东西固定写这里，不能去掉 -->
	<index-layout>
        
		<ViewTestReport/>
	</index-layout>
</template>

<script setup lang="ts">
import { uiState } from '@/memory/global';
import ViewTestReport from '@/view/business/report/test/ViewTestReport.vue';
</script>

<style lang="sass">
@import '../../ui/sass/app/_conf.sass'
// 全局样式定义
page, uni-page-body 
	background: $bg
</style>