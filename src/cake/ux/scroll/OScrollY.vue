<template>
    <view :class="clazz" class="o-scroll scroll-hide o-h oy-s ps-r zi-s">
        <slot></slot>
    </view>
</template>

<script setup lang="ts">
defineProps<{
    clazz?: string
}>()
</script>