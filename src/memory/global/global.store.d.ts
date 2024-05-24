
// STORE APP
interface AppStore {
    // 菜单
    menu: number,
    // 页面序号，用这个来切换页面
    page: number,
    // 全局加载, >= 0 代表 在加载，<= -1 代表不在加载
    ioading: number,
    
    // 遮罩层 >= 0 代表启动，<= -1 代表关闭
    hui: number,
    // 遮罩层的 z-index，默认值 = 300
    hui_z_index: number,

    // 模态框 >= 0 代表启动，且 启动哪个，使用序号标明启动哪个
    mod: number,
    // 当前 模态框的 z-index，默认值 = 500，一定是大于 hui_z_index
    mod_z_index: number,
    
    // 多方位 弹出页 >= 0 代表启动
    pan: number,
    // 默认值 = 400
    pan_z_index: number,
}
type APP_STORE_FIELD = 
    'menu' | 'page' | 'ioading' | 
    'hui' | 'hui_z_index' | 
    'mod' | 'mod_z_index' |
    'pan' | 'pan_z_index'