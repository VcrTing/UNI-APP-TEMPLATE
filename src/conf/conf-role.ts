

// 匿名访问
export const ROLE_ANON: string = 'ANON'

// 已授权
export const ROLE_AUTH: string = 'AUTH'

// 角色列表
export const ROLES: string[] = [
    ROLE_ANON,
    ROLE_AUTH
]

// 里面的角色，都拥有 JWT 权限
export const ROLES_AUTHS: string[] = [
    ROLE_AUTH
]