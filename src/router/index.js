import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/logout',
      name: 'logout',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/logout.vue')
    },
    {
      path: '/user/:page',
      name: 'user',
      component: () => import('../views/UserView.vue')
    },
    {
      path: '/manage',
      name: 'manage',
      component: () => import('../views/ManageView.vue')
    },
    {
      path: '/reg',
      name: 'reg',
      component: () => import('../views/RegView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/editpost/:id',
      name: 'editpost',
      component: () => import('../views/EditpostView.vue')
    }
    ,{
      path: '/compose',
      name: 'compose',
      component: () => import('../views/ComposeView.vue')
    }
    ,
    {
      path: '/domain',
      name: 'domain',
      component: () => import('../views/DomainView.vue')
    },
    {
      path: '/redirect',
      name: 'redirect',
      component: () => import('../components/redirect.vue')
    },
    {
      path: '/clean',
      name: 'clean',
      component: () => import('../components/clean.vue')
    }
  ],
})

//这里是为了避免出现Failed to fetch dynamically imported module错误打不开网页
router.onError((error, to) => {
  if (error.message.includes('Failed to fetch dynamically imported module')) {
    //window.location = to.fullPath
  }
})

export default router
