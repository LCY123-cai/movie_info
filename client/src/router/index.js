import Vue from 'vue'
import VueRouter from 'vue-router'
import register from '../views/register.vue'
import login from '../views/login.vue'
import create from '../views/create.vue'
import list from '../views/list.vue'
import detail from '../views/detail.vue'
import movie from '../views/movie.vue'
import store from '../store'
import { Notification } from 'element-ui'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { name: 'movie-list' }
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path: '/users/login',
      alias: '/login',
      name: 'login',
      component: login
     },
    {
      path: '/users/register',
      alias: '/register',
      name: 'register',
      component: register
     },
     {
      path: '/movies',
      component: movie,
      children: [
        { path: 'create', name: 'movie-create', component: create, meta: { auth: true } },
        { path: 'detail/:id', name: 'movie-detail', component: detail },
        { path: 'list', name: 'movie-list', component: list }
      ]
     },
     {
        path: '*',
        redirect: { name: 'movie-list' }
     }
  ]
})
// 页面刷新仍保持登录状态
router.beforeEach((to, from, next) => {
  if (to.matched.some((router) => router.meta.auth)) {
    if (store.state.isUserLogin) {
      next()
    } else {
      Notification({
        title: '提示',
        type: 'warning',
        message: '请登录后再访问该页面'
      })
      next({
        name: 'login',
        query: { redirect: to.fullPath }
      })
    }
  }
  next()
})

export default router
