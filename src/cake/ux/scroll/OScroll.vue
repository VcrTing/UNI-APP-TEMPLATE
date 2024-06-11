<template>
    <!--
    <view :class="clazz" class="o-scroll ox-s oy-s ps-r zi-s">
        <slot></slot>
    </view>
    -->
    
    <scroll-view scroll-y="true" scroll-x="true" show-scrollbar="false">
        <view
        :style="styie"
        :class="clazz">
            <slot></slot>
        </view>
    </scroll-view>
</template>

<script setup lang="ts">
defineProps<{
    clazz?: string,
    styie?: ONE
}>()
</script>