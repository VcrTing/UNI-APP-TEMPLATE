import { createSSRApp } from "vue";
import App from "./App.vue";

export function createApp() {
  const app = createSSRApp(App);
  return { app };
}

import "./ui/index.sass"

/*
bootstrap
*/

/* 
iconoir
import "./plugin/icon/iconoir/css/iconoir.css"
import "./plugin/icon/iconoir/css/iconoir-solid.css"
import "./plugin/icon/iconoir/css/iconoir-regular.css"
*/
/*
fontawasome
import "./plugin/icon/fontawasome/scss/fontawesome.scss"
import "./plugin/icon/fontawasome/scss/regular.scss"
import "./plugin/icon/fontawasome/scss/solid.scss"
*/

/*
colorui
import "./plugin/icon/colorui"
*/
// 测试用
// import "./view/test/form_build/form_build.sass"
import "./ui/sass_page/test/form_build.sass"