<template>
    <view>
        全局 VUEX 效果
        <view class="pb"></view>
        <view class="py">
            <view class="pb">LOADING: {{ ioading }}</view>
            <view><button @tap="func.doing('ioading', 0)">修改 ioading = 0</button></view>
            <view><button @tap="func.doing('ioading', -1)">修改 ioading = -1</button></view>
        </view>

        <view class="py">
            <view class="pb">MENU: {{ menu }}</view>
            <view><button @tap="func.doing('menu', menu +1)">修改 menu += 1</button></view>
            <view><button @tap="func.doing('menu', menu -1)">修改 menu -= 1</button></view>
        </view>
        
        <view class="py">
            <view class="pb">HUI: {{ hui }}</view>
            <view><button @tap="func.doing('hui', 0)">修改 hui = 0</button></view>
            <view><button @tap="func.doing('hui', -1)">修改 hui = -1</button></view>
        </view>
        
        <view class="py">
            <view class="pb">MOD: {{ mod }}</view>
            <view><button @tap="func.doing('mod', mod +1)">修改 mod += 1</button></view>
            <view><button @tap="func.doing('mod', mod -1)">修改 mod -= 1</button></view>
        </view>
    </view>
</template>

<script setup lang="ts">
import { appStore } from '@/stores/install';

// const prp = defineProps<{}>()

const ioading = computed((): number => appStore.state.ioading)
const menu = computed((): number => appStore.state.menu)
const hui = computed((): number => appStore.state.hui)
const mod = computed((): number => appStore.state.mod)

const func = {
    doing: (name: APP_STORE_FIELD, v: number) => appStore.commit('change', [ name, v])
}
</script>