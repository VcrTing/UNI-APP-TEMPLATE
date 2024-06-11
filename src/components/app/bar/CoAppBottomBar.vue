<template>
    <o-app-bottom-bar>
        <view class="fx-s pb-s pt-n px-row w-100 ta-c">

            <view 
                class="d-ib app-bottom-bar-item"
                v-for="(v, i) in me.bars" :key="i"
                :class="(code == v.respond_standard_code) ? 'app-bottom-bar-item-iive ' + v.clazz_iive : v.clazz_die"
                @tap="v.func()"
                >
                <view class="app-bottom-bar-item-icon">
                    <ui-i class="h5" :i="v.icon" />
                </view>
                <view v-if="v.tit" class="mw-3em px-s soft">
                    <view class="h9">{{ v.tit }}</view>
                </view>
            </view>

        </view>
    </o-app-bottom-bar>
</template>

<script setup lang="ts">
import uniRouter from '@/tool/uni/uni-router';


// const prp = defineProps<{}>()

const rt = computed((): string => {
    const info: Page.PageInstance = uniRouter.info()
    return info.route ? info.route : ''
})

const code = computed((): string => {
    const n: string = rt.value
    const src: CoAppBottomBarItem[] = me.bars
    for (let i= 0; i< src.length; i ++) {
        const _code: string = src[i].respond_standard_code
        if (n.indexOf(_code) > -1) { return _code }
    }
    return ''
})

const me = reactive({
    bars: <CoAppBottomBarItem[]> [
        {
            tit: '首页',
            icon: 'home',
            path: 'pages/index/index',
            respond_standard_code: 'index',
            clazz_die: '',
            clazz_iive: '',
            func: () => {
                uniRouter.navigatorpg('index')
            }
        },
        {
            tit: '报表',
            icon: 'report',
            path: 'pages/report/report',
            respond_standard_code: 'report',
            clazz_die: '',
            clazz_iive: '',
            func: () => {
                uniRouter.navigatorpg('report')
            }
        },
        {
            tit: '',
            icon: 'menu',
            path: '',
            respond_standard_code: 'menu',
            clazz_die: 'app-bottom-bar-btn',
            clazz_iive: '',
            func: () => {
                console.log('打开某个 PAN')
            }
        },
        {
            tit: '表单',
            icon: 'form',
            path: 'pages/form/form',
            respond_standard_code: 'form',
            clazz_die: '',
            clazz_iive: '',
            func: () => {
                uniRouter.navigatorpg('form')
            }
        },
        {
            tit: '我的',
            icon: 'user',
            path: 'pages/user/user',
            respond_standard_code: 'user',
            clazz_die: '',
            clazz_iive: '',
            func: () => {
                uniRouter.navigatorpg('user')
            }
        },
    ]
})
</script>