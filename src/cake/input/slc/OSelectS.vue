<template>

    <ui-dropdown ref="dropdown">
        <template #sign>
            <o-input-s 
                :clazz="iive ? 'o-inp-sec-iive' : ''"
                :text_mode="iive"
                :pchd="'请选择'">
                {{ me.tit }}
            </o-input-s>
        </template>
        <template #con>
            <view v-if="is_nice_arr(me.every)" class="py-t">
                <view 
                    @tap="func.choice(v, i)"
                    v-for="(v, i) in me.every" :key="i"
                >
                    <o-div 
                        :clazz_ripie="'bg-pri-iht-fcs'"
                        :clazz="func._item_clazz(v.value)"
                    >
                        <view class="pi-x2 pr py tils">
                            {{ v.label }}
                        </view>
                    </o-div>
                    <!--<view class="o-slc-con-line" v-if="i < len_1"></view>-->
                </view>
            </view>
        </template>
    </ui-dropdown>
</template>

<script setup lang="ts">
import { is_nice_arr, is_nice_sn, must_arr } from '../../../tool/util/valued';
import { promise } from '@/tool/util/future';

const prp = defineProps<{
    def?: O_SELECT_CHOISE,
    def_choise?: boolean,

    items: MANY,
    pk_tit: string,
    pk_value: string,

    err?: string,
    pchd?: string,
    label?: string,
    clazz?: string,
    clazz_inner?: string
}>()

const emt = defineEmits([ 'result' ])

const dropdown = ref()

const choice = ref<O_SELECT_CHOISE>(undefined)
const iive = computed(() => is_nice_sn(choice.value))

const me = reactive(<OSelectReactive> {
    tit: '',
    iive: false,
    dance_class: '',
    every: [ 
        
    ]
})

const func = {
    _item_clazz: (v: O_SELECT_CHOISE) => {
        if (is_nice_sn(v)) {
            return ((choice.value == v) ? 'pri bg-pri-iht' : '')
        }
        return (choice.value == v) ? 'bg-item ' : ' '
    },
    tit: () => promise(() => { me.tit = is_nice_sn(choice.value) ? func._txt(choice.value) : '' }),

    _txt: (v: O_SELECT_CHOISE): string => {
        let res = ''
        const its: OSelectItem[] = must_arr(me.every)
        its.map((e: OSelectItem) => { if (e.value == v) { res = e.label } })
        return res
    },
    choice: (item: ONE, i: number) => promise(() => {
        choice.value = item.value; 
        emt('result', choice.value)
        dropdown.value.close()
    }),

    init: () => promise(() => {

        // 先放默认值
        const df = prp.def
        if (is_nice_sn(df)) { 
            choice.value = df 
        }

        // 组装选择
        if (is_nice_arr(prp.items)) {
            me.every.length = 0
            prp.items.map((e: ONE) => {
                const _one = <OSelectItem> { }
                _one['label'] = e[ prp.pk_tit ]
                _one['value'] = e[ prp.pk_value ]
                me.every.push(_one)
            })

            me.every.push({ label: '(清空选择)', value: '' })
            // console.log('选择s =', me.every)
        }

        // 给个默认选择
        if (prp.def_choise) {
            if (is_nice_arr(me.every)) {
                if (choice.value == undefined) {
                    const fst: ONE = must_arr(me.every)[0]
                    choice.value = fst.value
                }
            }
            else {
                me.every = [ { label: '-- 无可选 --', value: undefined } ]
            }
        }
    })
}

watch(choice, func.tit)
nextTick(func.init)
</script>