import Vue from 'vue'
import VueRouter from 'vue-router'
import Toasted from 'vue-toasted';

Vue.use(Toasted)

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import( '../views/Home.vue')
  },
  {
    path: '*',
    component: () => import( '../views/Home.vue')
  },
  {
    path: '/red/:pimage/:fname/:position/:mobile/:office/:email',
    name: 'Red',
    component: () => import( '../views/Red.vue')
  },
  {
    path: '/orange/:pimage/:fname/:position/:mobile/:office/:email',
    name: 'Orange',
    component: () => import( '../views/Orange.vue')
  },
  {
    path: '/pink/:pimage/:fname/:position/:mobile/:office/:email',
    name: 'Pink',
    component: () => import( '../views/Pink.vue')
  },
  {
    path: '/purple/:pimage/:fname/:position/:mobile/:office/:email',
    name: 'Purple',
    component: () => import( '../views/Purple.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
