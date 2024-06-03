import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

import PostcssPxToViewport from 'postcss-px-to-viewport'

// POSTCSS PX TO VIEWPORT
const postcss = PostcssPxToViewport({
  //这里是设计稿宽度 自己修改
  unitToConvert: "px", // 要转化的单位
  viewportWidth: 1920, // UI设计稿的宽度
  unitPrecision: 6, // 转换后的精度，即小数点位数
  propList: ["*"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
  viewportUnit: "rem", // 指定需要转换成的视窗单位，默认vw
  fontViewportUnit: "rem", // 指定字体需要转换成的视窗单位，默认vw
  selectorBlackList: [], // 指定不转换为视窗单位的类名，
  minPixelValue: 9, // 默认值1，小于或等于1px则不进行转换
  mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
  replace: true, // 是否转换后直接更换属性值
  exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
  landscape: false // 是否处理横屏情况
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Components({
      dirs: [ 'src/components', 'src/conf', 'src/ui', 'src/cake' ]
    }),
    AutoImport({
      imports: [ 'vue', 'vue-router', 'vuex' ],
      dts: 'src/plugin/auto-import.d.ts',
      eslintrc: {
        enabled: false
      }
    }),
    
    uni()
  ],
  css: {
    postcss: {
      plugins: [ 
        // 废除使用 postcss, 使用自己的设置
        // 因为如果不是手机端应用，这玩意就崩了
        // 而且它还改不动 uni-app 自带的样式
        // postcss 
        
      ]
    }
  }
});
