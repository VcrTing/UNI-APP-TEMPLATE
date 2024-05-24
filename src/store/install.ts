import type { Store } from 'vuex';
import app from './global/app-store'

// 导出 APP STORE
export const appStore: Store<AppStore> = app.appStore

// 安装 STORE
export const installVuex = (app: any) => {

    return app;
}