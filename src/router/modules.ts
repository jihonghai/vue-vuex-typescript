
import { RouteConfig } from 'vue-router'

const CommonView = () => import(/* webpackChunkName: "CommonView" */ '@/view/CommonView.vue')

const Login = () => import('@/view/auth/Login.vue')

const Dashboard = () => import(/* webpackChunkName: "Dashboard" */ '@/view/Dashboard.vue')

const RoleManagement = () => import(/* webpackChunkName: "RoleManagement" */ '@/view/role/RoleManagement.vue')
const UserManagement = () => import(/* webpackChunkName: "UserManagement" */ '@/view/user/UserManagement.vue')

interface IRouterConfig extends RouteConfig {
  hidden?: boolean
  meta?: {
    title?: string
    icon?: string
    requireAuth?: boolean
    [key: string]: any
  }
}

const login: IRouterConfig = {
  path: '/login',
  component: Login,
  hidden: true
}

const dashboard: IRouterConfig = {
  path: '/',
  component: CommonView,
  children: [{
    path: 'dashboard',
    component: Dashboard
  }],
  hidden: true
}

const RoleMangementRouter: IRouterConfig = {
  path: 'role',
  name: 'role',
  component: RoleManagement,
  meta: {
    title: '角色管理'
  }
}

const UserManagementRouter: IRouterConfig = {
  path: 'user',
  name: 'user',
  component: UserManagement,
  meta: {
    title: '用户管理'
  }
}

const SystemManagement: IRouterConfig = {
  path: '/system',
  component: CommonView,
  redirect: '/system/role',
  name: 'system',
  hidden: false,
  children: [
    RoleMangementRouter,
    UserManagementRouter
  ],
  meta: {
    title: '系统管理',
    requireAuth: true
  }
}

const routers: RouteConfig[] = [
  dashboard,
  SystemManagement
]

export default routers
