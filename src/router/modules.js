
const Dashboard = () => import(/* webpackChunkName: "Dashboard" */ '@/view/Dashboard')

export default [
  {
    path: '/dashboard',
    meta: {
      requireAuth: true
    },
    component: Dashboard
  }
]
