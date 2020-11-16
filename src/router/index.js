import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase/app'
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
    path: '/actors-table',
    name: 'ActorsTable',
    meta: { layout: 'main' },
    component: () => import('../components/ActorsTable')
  },
  {
    path: '/actor-view',
    name: 'ActorView',
    meta: { layout: 'main' },
    component: () => import('../components/ActorView')
  },
  {
    path: '/producer',
    name: 'Producer',
    meta: { layout: 'main' },
    component: () => import('../views/Producer')
  },
  {
    path: '/producer-table',
    name: 'ProducerTable',
    meta: { layout: 'main' },
    component: () => import('../components/ProducerTable')
  },
  {
    path: '/producer-view',
    name: 'ProducerView',
    meta: { layout: 'main' },
    component: () => import('../components/ProducerView')
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
    path: '/film-main/',
    name: 'FilmMain',
    meta: { layout: 'main' },
    component: () => import('../views/FilmMain')
  },
  {
    path: '/reset-password',
    name: 'Reset Password',
    meta: { layout: 'main' },
    component: () => import('../views/ResetPassword')
  },
  {
    path: '/profile',
    meta: { layout: 'main', auth: true },
    component: () => import('../views/Profile'),
    children: [
      {
        path: '',
        name: "Profile",
        meta: { layout: 'main', auth: true },
        component: () => import('../components/ProfileFilmLists'),
      },
      {
        path: 'settings',
        meta: { layout: 'main', auth: true },
        component: () => import('../components/ProfileSettings'),
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requireAuth = to.matched.some(record => record.meta.auth)
  
  if (requireAuth && !currentUser) {
    next('/')
  } else {
    next()
    document.body.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    })
  }
})

export default router
