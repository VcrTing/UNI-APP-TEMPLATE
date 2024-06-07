<template>
	<page-meta :root-font-size="uiState.root_font_size_coefficient + 'px'" style="display: block;"/>
    <auth-layout>
        <view class="ta-c pb-x2">
            <view class="fx-c login-header-wrapper">
               
                <view>
                    <image class="ui-img" :class="'h2 login-logo'" 
                        :style="{ 'width': '4.8em', 'height': '1em' }"
                        mode="aspectFill" :src="LOGO"/>
                </view>
                <!-- <image class="h2 login-logo" mode="aspectFill" :src="LOGO"/>
                    -->
                <view class="h2 b login-header">欧锦亦</view>
            </view>
            <view class="py login-header-sub">深圳欧锦亦服饰有限公司</view>
        </view>
        <view class="w-100 fx-c py px-x2">

            <ViewLoginForm :form="form" class="w-100"/>
        </view>
        <view class="py-x3"></view>
        <view class="py-x2"></view>
    </auth-layout>
</template>

<script setup lang="ts">
import LOGO from '@/static/company/LOGO.png'
import { IS_TEST_MODE, TEST_LOGIN_USER } from '@/conf/conf';
import ViewLoginForm from '@/view/auth/ViewLoginForm.vue';
import { uiState } from '@/memory/global';

const form = reactive({ username: '', password: '' })

const func = {
    init: () => {
        if (IS_TEST_MODE) {
            const dev: ONE = TEST_LOGIN_USER[ 'ADMIN' ]
            form.username = dev.username
            form.password = dev.password
        }
    }
}

nextTick(func.init)
</script>

<style lang="scss">
page {
    background: rgb(252, 252, 252);
}

.login-header-sub {
    color: rgba(0, 0, 0, .45)
}

.login-header {
    margin-left: -1.2rem;
    // color: rgba(0, 0, 0, .85)
}

.login-logo {
    width: 4.8em;
    height: 1em;
}

.login-header-wrapper {
    transform: translateX(-0.5rem);
}
</style>