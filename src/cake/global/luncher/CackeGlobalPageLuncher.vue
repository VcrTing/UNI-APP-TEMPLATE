<template>
    
</template>

<script setup lang="ts">
import { appStore } from '../../../memory/stores'

// const prp = defineProps<{}>()

const menu = computed((): number => appStore.state.menu)

watch(menu, (n: number) => {
    if (n > 0) {
        console.log("-----> 跳转 MENU 的页面 =", n)
    } 
    else if (n == 0) {
        console.log("-----> 跳转 到 首页")
    }
    else {
        console.log("-----> 不跳转 MENU 页面")
    }
})
</script>