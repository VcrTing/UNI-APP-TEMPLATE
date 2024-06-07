<template>
	<page-meta :root-font-size="uiState.root_font_size_coefficient + 'px'" style="display: block;"/>
    <!-- APP 配置，这东西固定写这里，不能去掉 -->
	<index-layout>
        
        报表

	</index-layout>
</template>

<script setup lang="ts">
import { uiState } from '@/memory/global';
</script>