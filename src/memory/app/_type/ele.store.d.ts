
type ORIENTATION = 't' | 'r' | 'b' | 'l' | 'i' | 'c'

// 有参数则启动，无参数则不启动
interface ElePanHui {
    opacity: number,
}

interface ElePan {
    iive: boolean, // 死亡
    show: boolean, // 展示

    z_index: number,
    idx: number,
    clazz: string,

    orientation: ORIENTATION, // 要什么方位，默认 右边

    hui: number, // 灰，>= 0 表示启动
    hui_opacity: number, // 灰 层 透明度，默认 0.4，超过 0.6 只能 0.6

    path: string, // 组件路径，用于 import 动态加载 组件

    component: ONE | null // 组件内容
}


interface EleStore {
    
    // 遮罩层 > 0 代表启动，< 1 代表关闭
    hui: number,
    // 遮罩层的 z-index，默认值 = 300
    hui_z_index: number,

    // 模态框 > 0 代表启动，且 启动哪个，使用序号标明启动哪个
    mods: [ ],
    
    // 多方位 弹出页，数组里面的弹框，全部展示
    pans: ElePan[ ],
}

type ELE_STORE_FIELD = 
    'hui' | 'hui_z_index' | 'mods' | 'pans'