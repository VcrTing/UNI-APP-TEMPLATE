<template>
  <view class="content">
	<view>
		<GlobalVuex/>

		<CakeGlobal/>
		<CoGlobal/>
	</view>
  </view>
</template>

<script setup lang="ts">
import GlobalVuex from '@/view/test/vuex/GlobalVuex.vue';

const title = ref('UNIAPP')
const hello = () => {
	console.log("HELLO " + title.value)
}
</script>