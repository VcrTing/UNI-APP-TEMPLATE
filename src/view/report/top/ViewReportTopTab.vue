<template>
    <view>
        <o-scroll-x>
            <!-- TABS -->
            <view class="">
                <view class="d-ib" v-for="(v, i) in schemas" :key="i">
                    <view @tap="tab(i)" :class="v.__tab_iive ? 'pr-s' : ''">
                        <o-div :clazz="(v.__tab_iive ? 'btn-pri-iht btn ' : 'btn')">
                            <view class="ts py" :class="v.__tab_iive ? 'px-x1' : 'px'">
                                {{ v.__tab_name }}
                            </view>
                        </o-div>
                    </view>
                </view>
            </view>
        </o-scroll-x>
    </view>
</template>

<script setup lang="ts">
import { must_arr } from '@/tool/util/valued';

const prp = defineProps<{
    schemas: ReportSchema[] | undefined
}>()

const len = computed(() => must_arr(prp.schemas).length)

const _clazz = (v: ReportSchema): string => {
    let sf: string = ' '
    if (len.value == 1) {
        // sf += ' br-tr '
    } 
    else {

    }
    return (v.__tab_iive ? 'btn-pri-iht btn ' : 'btn') + sf
}

const tab = (i: number) => {
    must_arr(prp.schemas).map((e: ReportSchema, _i: number) => {
        if (i == _i) {
            e.__tab_iive = true 
        } 
        else {
            e.__tab_iive = false
        }
    })

}
</script>