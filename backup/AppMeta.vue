<template>
	<!-- 请给所有页面加上这个，服了 -->
	<page-meta :root-font-size="size + 'px'"/>
</template>

<script setup lang="ts">
const size = ref(16)

const func = {
	isPc: (w: number = 0) => (w > 1099),
	isPad: (w: number = 0) => (w > 699 && w < 1099),
	isPhone: (w: number = 0) => (w <= 699)
}

const init = async () => {
	const info: ONE = await uni.getSystemInfo()
	const w: number = info.windowWidth ? info.windowWidth : 0
	
	// 精细化 手机端
	if (func.isPhone(w)) {

		if (w < 441) {

			if (w < 379) {
				size.value = 12
			} 
			else if (w < 399) {
				size.value = 13
			} 
			else if (w < 429) {
				size.value = 14
			}
			else {
				size.value = 16
			}
		}
		// 超过 手机
		else {
			if (w < 799) {
				size.value = 18
			} 
			else {
				size.value = 20
			}
		}
	}
	else {
		size.value = 14
	}

	console.log("根节点，字体 = " + size.value + "px")
}
init()
</script>

<style lang="scss">
@import '../ui/sass/app/media-screen';

// 配置 body 的 字体大小，因为字体是继承的，所以，可以继承到 body 的字体大小
// NORMAL 16px
page, uni-page-body { font-size: 16px; }
// tiny 12px
@each $k, $v in $tiny { @media screen and (#{$k}-width: #{$v}px) {
	page, uni-page-body { font-size: 12px; }
}}

// mini 13px
@each $k, $v in $mini { @media screen and (#{$k}-width: #{$v}px) {
	page, uni-page-body { font-size: 13px; }
}}

// SMAII 14px
@each $k, $v in $smaii { @media screen and (#{$k}-width: #{$v}px) {
	page, uni-page-body { font-size: 14px; }
}}

// NORMAL 16px
@each $k, $v in $normai { @media screen and (#{$k}-width: #{$v}px) {
	page, uni-page-body { font-size: 16px; }
}}

// PAD 18px
@each $k, $v in $pad { @media screen and (#{$k}-width: #{$v}px) {
	page, uni-page-body { font-size: 18px; }
}}

// WINDOW 14px
@each $k, $v in $window { @media screen and (#{$k}-width: #{$v}px) {
	page, uni-page-body { font-size: 14px; }
}}

</style>


<style lang="scss">
@import '../ui/sass/app/media-screen';

// 配置 body 的 字体大小，因为字体是继承的，所以，可以继承到 body 的字体大小
// NORMAL 16px
page, uni-page-body, body { font-size: 16px; }

// WINDOW 14px
@each $k, $v in $window { 
	@media screen and (#{$k}-width: #{$v}px) {
		page, uni-page-body, body { font-size: 14px; }
}};
// PAD 18px
@each $k, $v in $pad { 
	@media screen and (#{$k}-width: #{$v}px) {
		page, uni-page-body, body { font-size: 18px; }
}};
// NORMAL 16px
@each $k, $v in $normai { 
	@media screen and (#{$k}-width: #{$v}px) {
		page, uni-page-body, body { font-size: 16px; }
}};
// SMAII 14px
@each $k, $v in $smaii { 
	@media screen and (#{$k}-width: #{$v}px) {
		page, uni-page-body, body { font-size: 14px; }
}};
// mini 13px
@each $k, $v in $mini { 
	@media screen and (#{$k}-width: #{$v}px) {
		page, uni-page-body, body { font-size: 13px; }
}};
// tiny 12px
@each $k, $v in $tiny { 
	@media screen and (#{$k}-width: #{$v}px) {
		page, uni-page-body, body { font-size: 13px; }
}};
</style>