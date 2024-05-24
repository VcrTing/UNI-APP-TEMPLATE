import { createSSRApp } from "vue";
import App from "./App.vue";

import "./ui/sass/index.sass"
import "./view/test/form_build/form_build.sass"

export function createApp() {
  const app = createSSRApp(App);
  return { app };
}
