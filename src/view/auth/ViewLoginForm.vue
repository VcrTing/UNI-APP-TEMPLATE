<template>
    <view :class="class">
        <view class="py-s">
            <o-input :pchd="'用户名'" :tit="'用户名'" :clazz_input="'mh-inp-x1'"
                :def="form.username"
                @result="func.username"
            />
        </view>
        <view class="py-s">
            <o-input :pchd="'密码'" :tit="'密码'" :clazz_input="'mh-inp-x1'" :typ="'password'"
                :def="form.password"
                @result="func.password"
            />
        </view>
        <view class="py-s">

        </view>
        <view class="py">
            <o-button @tap="func.login" :clazz_con="'mh-btn-x1'">登录</o-button>
        </view>
    </view>
</template>

<script setup lang="ts">

import server_auth from '@/server/auth/server_auth';
import { authDispatch } from '@/memory/global';
import uniRouter from '@/tool/uni/uni-router';
import { future, futuring } from '@/tool/util/future';

const prp = defineProps<{ form: ONE, class: string | null }>()

const aii = reactive({
    ioading: false
})

const func = {
    login: () => futuring(aii, async () => {
        console.log('开始登录。。。', aii.ioading)

        const res: ONE_NULL = await server_auth.login(prp.form)
        
        console.log('登录数据 = ', res)
        if (res) {
            // 登录成功
            await authDispatch('login', res)
            func.success()
        } else {
            // 登录失败
        }
    }),

    success: () => {
        console.log('登录成功')
        uniRouter.redpg('login_succ')
    },

    username: (v: SN) => {
        prp.form.username = v.toString()
        console.log('输入 =', v)
    },
    password: (v: SN) => {
        prp.form.password = v.toString()
        console.log('输入 =', v)
    }
}
</script>