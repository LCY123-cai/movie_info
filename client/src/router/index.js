import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import register from '../views/register.vue'
import login from '../views/login.vue'
import create from '../views/create.vue'
import list from '../views/list.vue'
import movie from '../views/movie.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
      { path: 'create', name: 'movie-create', component: create },
      { path: 'list', name: 'movie-list', component: list }
    ]
   }
]

const router = new VueRouter({
  routes
})

export default router
