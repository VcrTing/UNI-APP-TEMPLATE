import { createSSRApp } from "vue";
import App from "./App.vue";

import Vuex from 'vuex';

import { installVuex } from "./stores/install";
// import Antd from 'ant-design-vue';

import "./ui/sass/index.sass"
import "./test/form_build/form_build.sass"

export function createApp() {
  const app = createSSRApp(App);
  return { app: installVuex(app) };
}
