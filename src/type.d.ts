/*
    自定义的 全局 类型
*/

declare global {
    type ONE = { [k: string]: any }
    type ONEO = { [k: string]: ONE }

    type MANY = ONE[ ]
    
    type ANYS = any[ ]

    type SN = string | number
    type SNS = SN[ ]
    
    type SNN = string | number | null
    type SNNS = SNN[ ]
}

export {};