<template>
    <!--
    <image mode="aspectFit" class="ui-i" 
        :src="iconnoir(i)"
    ></image>-->
    <text class="ui-i" :class="iconnoir[i]"></text>
</template>

<script setup lang="ts">
import { iconnoir } from '@/plugin/icon/iconnoir';

defineProps<{
    i: ICONS | string
}>()
</script>