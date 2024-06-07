import { createSSRApp } from "vue";
import App from "./App.vue";


import "./ui/sass/index.sass"

export function createApp() {
  const app = createSSRApp(App);
  return { app };
}

import "./plugin/caniendar/caniendar.sass"

import "./ui/sass_page/index.sass"

import "./plugin/icon/iconoir/css/iconoir.css"
import "./plugin/icon/iconoir/css/iconoir-solid.css"
import "./plugin/icon/iconoir/css/iconoir-regular.css"

// 测试用
import "./view/test/form_build/form_build.sass"