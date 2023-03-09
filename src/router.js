// import Vue from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/', 
    name: 'ORDER',
    component: () => import('./pages/app.vue'),
    meta: {
      middleware: [],
      titleKey: 'Payment',
    },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

// creating middleware
router.beforeEach(async (to, from, next) => {
  if (to.meta.middleware) {
    for (const mware of to.meta.middleware) {
      await mware(to, from, next)
    }
  }
  return next()
})

export default router
