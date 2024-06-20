<template>
	<page-meta :root-font-size="uiState.root_font_size_coefficient + 'px'" style="display: block;"/>
    <!-- APP 配置，这东西固定写这里，不能去掉 -->
	<index-layout class="index-layout">
		<!-- 报表页面顶部 -->
		<ViewReportTop>
			<ViewReportTopTab :schemas="schemas"/>
		</ViewReportTop>
		<ViewReportTopTabMat :schemas="schemas"/>

		<!-- 选择内容 -->
        <view>
			<view class="px py-t btn" @tap="funn.go('1651716406')">跳转到 CODE = 1651716406 销售订单</view>
			<view class="px py-t btn" @tap="funn.go('1621955715')">跳转到 CODE = 1621955715 库存量查询</view>
		</view>

		<!-- 报表内容页面 -->
		<ViewReportData ref="report_data_page" :deploy="deploy" :schemas="schemas"/>

		<!-- 选择报表的下拉框 -->

		<!-- 报表表单过滤器 -->

	</index-layout>
</template>
 
<script setup lang="ts">
import { uiState } from '@/memory/global';
import { futuring } from '@/tool/util/future';
import { reportDPDispatch } from './_memory/report-page-deploy-store';
import { is_nice_arr } from '@/tool/util/valued';
import { onecopy } from '@/tool/util/iodash';
import ViewReportTop from '../../view/report/top/ViewReportTop.vue';
import ViewReportTopTab from '../../view/report/top/ViewReportTopTab.vue';
import ViewReportTopTabMat from '../../view/report/top/_tool/ViewReportTopTabMat.vue';
import ViewReportData from '../../view/report/data/ViewReportData.vue';
import { reportDWDispatch, reportDWState } from './_memory/report-page-working-store';

const identify = computed(() => reportDWState.identify)

const aii = reactive({
	init: false,
	choise: false, // 打开报表选择框
	ioading: false,
})

// 以 deploy 进行 页面驱动，所有初始化内容均在 deploy 内

const deploy = reactive(<ONE>{
    code: null,
    pager: <DynamicPager>{ },
    view: [ ], // 临时缓存的数据，只缓存 pager.num * 2 行数据
    schemas: <ReportSchema[]>[ ], // 这是个大数据
})

// 核心结构
const schemas = ref<ReportSchema[] | undefined>(undefined)

const report_data_page = ref()

const funn = {
	// 站内页面切换
	go: async (cd: string) => await reportDWDispatch('change', [ 'identify', cd ]),

	// 专门给 deploy 加载 schemas
	ioad_schemas: async (): Promise<ReportSchema[]> => {
		// 判断是否有 schemas
		if (is_nice_arr(deploy.schemas)) {
			return deploy.schemas
		}
		// 没有 schemas，请求磁盘/网络穿透加载 schemas
		else {
			const schemas = await reportDPDispatch('init_schema', identify.value)
			if (is_nice_arr(schemas)) return schemas
		}
		return [ ]
	},
	// 同步 deploy 数据
	async_deploy: async () => {
		deploy.code = identify.value
		// load schemas
		const _ss = await funn.ioad_schemas()
		// 初始化先为空
		if (schemas.value) schemas.value.length = 0
		console.log('刷新页面的 ss =', _ss)
		schemas.value = _ss
		deploy.schemas = _ss
		// load other
		deploy.path = identify.value
		// 驱动子页面重刷
		report_data_page.value.refresh()
		// 同步切换页面的次数
		// await reportDWDispatch('switch_page_num_add')
		// 完成加载
		// console.log('动态同步 页面完毕 =', deploy)
	},

	// 页面初始化
	init: () => futuring(aii, async () => {
		if (identify.value) {
			// init deploy
			const __deploy: ReportPageDeploy = await reportDPDispatch('init_deploy', identify.value)
			// __deploy data copy to reactive deploy
			onecopy(deploy, __deploy as ONE)
			// loading schemas
			await funn.async_deploy()
			aii.init = true
		}
		else {
			aii.choise = true
			// pan_tooi.open_pan
			console.log('打开选择报表的菜单')
			aii.init = false
		}
	})
}

watch(identify, funn.init)
nextTick(funn.init)
</script>

<style lang="sass">
@import '../../ui/sass/app/_conf.sass'
// 全局样式定义
page, uni-page-body 
	background: $bg
</style>