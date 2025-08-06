import { createRouter, createWebHistory } from 'vue-router'

import Inicio from '@/views/Inicio.vue'
import Crear from '@/views/crear.vue'
import Contacto from '@/views/contacto.vue'
import Login from '@/views/Login.vue'
import LandingPage from '@/layouts/landingPage.vue'
import Registrar from '@/views/Registrar.vue'
import resetPassword from '@/views/resetPassword.vue'

const routes = [
  {
    path: '/',
    component: LandingPage,
    children: [
      {
        path: '',
        name: 'Inicio',
        component: Inicio,
      },
      {
        path: 'crear',
        name: 'Crear',
        component: Crear,
      },
      {
        path: 'contacto',
        name: 'Contacto',
        component: Contacto,
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/registro',
    name: 'Registro',
    component: Registrar,
  },
  {
    path: '/resetPassword/:token',
    name: 'ResetearContrasena',
    component: resetPassword,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated')

  // Rutas públicas (sin necesidad de autenticación)
  const publicRoutes = [
    '/login',
    '/registro',
    '/SolicitarReset',
    '/ResetearContraseña',
    '/resetPassword',
  ]

  // Verifica si la ruta actual empieza por alguna ruta pública (soporta rutas dinámicas)
  const isPublic = publicRoutes.some((route) => to.path.startsWith(route))

  if (!isPublic && !isAuthenticated) {
    next('/login')
  } else if ((to.path === '/login' || to.path === '/registro') && isAuthenticated) {
    next('/')
  } else {
    next()
  }
})
