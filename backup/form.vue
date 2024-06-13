<template>
	<page-meta :root-font-size="uiState.root_font_size_coefficient + 'px'" style="display: block;"/>
    <!-- APP 配置，这东西固定写这里，不能去掉 -->
	<index-layout class="index-layout">
        <o-safe-area-top/>

		<ViewUi/>

	</index-layout>
</template>

<script setup lang="ts">
import { uiState } from '@/memory/global';
import jsoner from '@/tool/util/jsoner';
import ViewUi from '@/view/test/ui/ViewUi.vue';

const a_1_json = "{\"codeParam\":\"Bdate\",\"nameParam\":\"\",\"age\":12}"
const a_2 = "{codeParam:'Bdate',nameParam:'',age:-12}"
const a_2_2 = "{codeParam:\"Bdate\",'nameParam':\"\",age:-12}"
const a_3 = "[{label: '大货',value: '大货'},{ label: '样布',value: '样布'}]"
const a_4 = "[{label: '大货',value: '大货',items:[{codeParam:'Bdate1',nameParam:''},{codeParam:'Bdate2',nameParam:123}]},{ 'label': '样布',value: '样布'}]"

const a_1 = "{'codeParam':'Bdate','codeParam2':'Bdate2','nameParam':'',age:12}"
const funn = {
	_JSON_STR_GROUP_1: {
		origins: [ /{'/gi, /\'\:/gi, /\:\'/gi, /\',/gi, /,\'/gi, /\'}/gi ],
		repalces: [ "{\"", "\":", ":\"", "\",", ",\"", "\"}" ]
	},
	replace_json_str: (src: string, str_group: ONE) => {
		const _replace_1 = str_group.repalces
		str_group.origins.map(( _str: string, i: number) => {
			src = src.replace(_str, _replace_1[i])
		})
		return src
	},

	ser: () => {
		const src = a_1
		console.log('origin =' + src)

		try {
			const r1 = JSON.parse(src)
		} catch(err) {
			console.log('没法json')
		}

		jsoner.test_example(src)
		/*
		__E = funn.replace_json_str( __E, funn._JSON_STR_GROUP_1 )

		try {
			const r2 = JSON.parse(__E)
			console.log('结果 =', r2)
		} catch(err) {
			console.log('结果没法json =', __E)
		}
		*/
	}
}

</script>