<template>
	<page-meta :root-font-size="uiState.root_font_size_coefficient + 'px'" style="display: block;"/>
    <!-- APP 配置，这东西固定写这里，不能去掉 -->
	<index-layout class="index-layout">
		<view class="px-con">
			<ViewIndexTop/>
		</view>

		<view class="pi-con">
			<ViewIndexTabs/>
			<ViewIndexSale/>
			<viewIndexBanner/>
		</view>
	</index-layout>
</template>

<script setup lang="ts">
import { uiState } from '@/memory/global';
import ViewIndexTop from '../../view/index/VIewIndexTop.vue'
import ViewIndexTabs from '../../view/index/ViewIndexTabs.vue'
import ViewIndexBanner from '../../view/index/ViewIndexBanner.vue'
import ViewIndexSale from '@/view/index/ViewIndexSale.vue';
</script>

<style lang="sass">
@import '../../ui/sass/app/_conf.sass'
// 全局样式定义
page, uni-page-body
	background: $bg
</style>