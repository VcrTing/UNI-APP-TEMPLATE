import { createSSRApp } from "vue";
import App from "./App.vue";

import "./ui/sass/index.sass"
import "./view/test/form_build/form_build.sass"

export function createApp() {
  const app = createSSRApp(App);
  return { app };
}

import "./plugin/icon/iconoir/css/iconoir.css"
import "./plugin/icon/iconoir/css/iconoir-solid.css"
import "./plugin/icon/iconoir/css/iconoir-regular.css"