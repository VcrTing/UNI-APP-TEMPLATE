<template>
    <!--
    <image mode="aspectFit" class="ui-i" 
        :src="iconnoir(i)"
    ></image>-->
    <text class="ui-i" :class="booticon[i]"></text>
</template>

<script setup lang="ts">
// import { iconnoir } from '@/plugin/icon/iconnoir';
// import { colorui } from '@/plugin/icon/colorui';
// import { fontawasome } from '@/plugin/icon/fontawasome';
import { booticon } from '@/plugin/icon/boostrap';

defineProps<{
    i: ICONS | string
}>()
</script>