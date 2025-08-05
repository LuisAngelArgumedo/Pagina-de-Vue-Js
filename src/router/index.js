import { createRouter, createWebHistory } from 'vue-router'

import Inicio from '@/views/Inicio.vue'
import Crear from '@/views/crear.vue'
import Contacto from '@/views/contacto.vue'
import Login from '@/views/Login.vue'
import LandingPage from '@/layouts/landingPage.vue'
import Registrar from '@/views/Registrar.vue'

const routes = [
  {
    path: '/',
    component: LandingPage,
    children: [
      {
        path: '',
        name: 'Inicio',
        component: Inicio
      },
      {
        path: 'crear',
        name: 'Crear',
        component: Crear
      },
      {
        path: 'contacto',
        name: 'Contacto',
        component: Contacto
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/registro',
    name: 'Registro',
    component: Registrar
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated')
  
  // Rutas públicas (no requieren autenticación)
  const publicRoutes = ['/login', '/registro']
  
  if (!publicRoutes.includes(to.path) && !isAuthenticated) {
    // Redirige si no está autenticado y quiere entrar a rutas protegidas
    next('/login')
  } else if ((to.path === '/login' || to.path === '/registro') && isAuthenticated) {
    // Si ya está autenticado y va al login o registro, redirige al inicio
    next('/')
  } else {
    next()
  }
})
