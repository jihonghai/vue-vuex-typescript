
const Dashboard = () => import(/* webpackChunkName: "Dashboard" */ '@/view/Dashboard.vue')

export default [
  {
    path: '/dashboard',
    meta: {
      requireAuth: true
    },
    component: Dashboard
  }
]
