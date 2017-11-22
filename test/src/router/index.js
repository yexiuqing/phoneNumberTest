import Vue from 'vue'
import Router from 'vue-router'
import phoneTest from '@/components/phoneTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'phoneTest',
      component: phoneTest
    }
  ]
})
