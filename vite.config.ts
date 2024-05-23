import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Components({
      dirs: [ 'src/components', 'src/ui/ui_global', 'src/cake/global' ]
    }),
    AutoImport({
      imports: [ 'vue', 'vue-router', 'pinia' ],
      dts: 'src/plugin/auto-import.d.ts',
      eslintrc: {
        enabled: false
      }
    }),
    
    uni()
  ],
});
