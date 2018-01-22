import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Home from '@/components/Home'
import StepStrata from '@/components/StepStrata'
import StepDeliveryOptions from '@/components/StepDeliveryOptions'

import store from '../store/store'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requireAuth: false
    },
    children: [
      {
        path: 'step2',
        component: StepStrata,
        meta: {
          requireAuth: false
        }
      },
      {
        path: 'step3',
        component: StepDeliveryOptions,
        meta: {
          requireAuth: false
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (store.state.isLogined) {
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    if (to.path === '/login') {
      // next({
      // path: to.query.redirect
      // })
      next()
    } else {
      next()
    }
  }
})

export default router
