import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: () => import('../views/SignIn.vue')
  },
  {
    path: '/login',
    name: 'LogIn',
    component: () => import('../views/LogIn.vue')
  },
  {
    path: '/cursos',
    name: 'Cursos',
    component: () => import('../views/Cursos.vue')
  },
  {
    path: '/administracion',
    name: 'Administracion',
    component: () => import('../views/Administracion.vue')
  },
  {
    path: '/editar',
    name: 'EditarCurso',
    component: () => import('../views/EditarCurso.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
