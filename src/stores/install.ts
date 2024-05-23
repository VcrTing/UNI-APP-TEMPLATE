import type { Store } from 'vuex';
import app from './app_store'

// 导出 STORE
export const appStore: Store<AppStore> = app.appStore

// 安装 STORE
export const installVuex = (app: any) => {

    return app;
}