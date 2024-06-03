
<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
import { init_global_data } from "./tool/uni/uni-global";

// 装 全局变量
onLaunch(() => { });
onShow(() => {
  const app = getApp()
  if (app) {
    console.log('================== 全局数据：', app.globalData)
  }
});
onHide(() => { });

nextTick(init_global_data)
</script>

<style lang="sass">
@import ./ui/sass/app/conf
@import ./ui/sass/theme/_conf_theme_light/conf-theme-light-txt
@import ./ui/sass/app/media-screen

// 全局样式定义
page, uni-page-body 
  height: 100%
  box-sizing: border-box
  overflow-x: hidden
  overflow-y: scroll
  @extend .fs
  &::-webkit-scrollbar
      width: 1px
      border-radius: 10px
      background: transparent
  
page, uni-page-body, view, text, button, uni-input, uni-button
  box-sizing: border-box
  
// 重绘 uni 样式
view, text, button
  font-size: 1em

uni-input
  font-size: 1em
  &, &:hover, &:active, &:focus, &:focus-visible
    outline: none
  
uni-button
  font-size: 1em !important
  line-height: $ih !important

  margin: 0px !important
  padding: 0px !important
  border-radius: 0px !important

  overflow: visible !important
  background: transparent !important
  border: 0px solid transparent !important
  
  &::after
    border: 0px solid transparent !important

// 配置 body 的 字体大小，因为字体是继承的，所以，可以继承到 body 的字体大小
// NORMAL 16px
page, uni-page-body, body
  font-size: 16px
// WINDOW 14px
@each $k, $v in $window
  @media screen and (#{$k}-width: #{$v}px)
    page, uni-page-body, body
      font-size: 14px
// PAD 18px
@each $k, $v in $pad
  @media screen and (#{$k}-width: #{$v}px)
    page, uni-page-body, body
      font-size: 18px 
// NORMAL 16px
@each $k, $v in $normai
  @media screen and (#{$k}-width: #{$v}px)
    page, uni-page-body, body
      font-size: 16px 
// SMAII 14px
@each $k, $v in $smaii
  @media screen and (#{$k}-width: #{$v}px)
    page, uni-page-body, body
      font-size: 14px 
// mini 13px
@each $k, $v in $mini
  @media screen and (#{$k}-width: #{$v}px)
    page, uni-page-body, body
      font-size: 13px 
// tiny 12px
@each $k, $v in $tiny
  @media screen and (#{$k}-width: #{$v}px)
    page, uni-page-body, body
      font-size: 13px 
</style>
