<template>
    <view :class="clazz" class="o-scroll ox-s oy-s ps-r zi-s">
        <slot></slot>
    </view>
</template>

<script setup lang="ts">
defineProps<{
    clazz?: string
}>()
</script>