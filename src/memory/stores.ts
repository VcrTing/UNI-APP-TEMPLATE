import type { Store } from 'vuex';
import app from './global/app-store'
import auth from './user/auth-store'

// 导出 APP STORE
export const appStore: Store<AppStore> = app
export const authStore: Store<AuthStore> = auth