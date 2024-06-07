<template>
    <view class="ui-dropdown" :class="_class">
        <view class="ui-dropdown-sign" @tap="() => _class = ' '">
            <slot name="sign"></slot>
        </view>
        <view class="ui-dropdown-con">
            <view class="ui-dropdown-con-inner">
                <slot name="con"></slot>
            </view>
        </view>
    </view>
</template>
    
<script lang="ts" setup>
const num = ref<number>(0)
const _class = ref<string>(' ')

const funn = {
    close: () => (num.value += 1),
    open: () => (_class.value = ' ')
}
defineExpose(funn)
watch(num, () => (_class.value = 'ui-dropdown-die'))
</script>