import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Components({
      dirs: [ 'src/components', 'src/ui/global', 'src/cake/global', 'src/components/global' ]
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
});
