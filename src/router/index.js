import Vue from 'vue'
import Router from 'vue-router'
import Sender1 from '@/components/Sender1'
import CastConfig from '@/components/CastConfig'
import AppContent1 from '@/components/AppContent1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CastConfig',
      component: CastConfig
    },
    {
      path: '/sender1',
      name: 'Sender1',
      component: Sender1
    },
    {
      path: '/app1',
      name: 'AppContent1',
      component: AppContent1
    }
  ]
})
