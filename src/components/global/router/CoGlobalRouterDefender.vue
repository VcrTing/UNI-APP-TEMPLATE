<template>
    
</template>

<script setup lang="ts">
import { PAGES, PAGE_WHITE_LIST } from '@/conf/conf-page';
import { ROLES_AUTHS, ROLE_ANON } from '@/conf/conf-role';
import router from '@/tool/uni/router';
import { arrhas } from '@/tool/util/iodash';

const prp = defineProps<{
    role: ROLES,
}>()

const func = {
    allow: () => {
        // 当前角色
        const role: string = prp.role ? prp.role : ROLE_ANON

        // 页面实例
        const route: Page.PageInstance = router.info()
        const path: string | undefined = route.route

        // 判断是否在白名单
        if (arrhas(PAGE_WHITE_LIST, path)) {

        } 
        // 页面不在白名单内
        else {
            
            // 判断当前用户权限是否在认证内
            if (arrhas(ROLES_AUTHS, role)) {
                
            } 
            // 当前用户权限不在认证内
            else {

                // 跳转到登录页面
                // router.redirect(PAGES['login'])
            }
        }
    }
}

func.allow()
</script>