import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'main' },
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    meta: { layout: 'main' },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/categories',
    name: 'Categories',
    meta: { layout: 'main' },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Categories.vue')
  },
  {
    path: '/register',
    name: 'Register',
    meta: { layout: 'main' },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path: '/actors',
    name: 'Actors',
    meta: { layout: 'main' },
    component: () => import('../views/Actors')
  },
  {
    path: '/films',
    name: 'Films',
    meta: { layout: 'main' },
    component: () => import('../views/Films')
  },
  {
    path: '/add-film',
    name: 'AddFilm',
    meta: { layout: 'main' },
    component: () => import('../views/AddFilm')
  },
  {
    path: '/add-actor',
    name: 'AddActor',
    meta: { layout: 'main' },
    component: () => import('../views/AddActor')
  },
  {
    path: '/film-view/:id',
    name: 'FilmView',
    meta: { layout: 'main' },
    component: () => import('../views/FilmView')
  },
  {
    path: '/film-main',
    name: 'FilmMain',
    meta: { layout: 'main' },
    component: () => import('../views/FilmMain')
  },
  {
    path: '/modal',
    name: 'ModalAddToWatchList',
    meta: { layout: 'main' },
    component: () => import('../components/ModalAddToWatchList')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
