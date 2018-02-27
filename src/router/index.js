import Vue from 'vue'
import Router from 'vue-router'
import Sender from '@/components/Sender'
import HelloWorld from '@/components/HelloWorld'
import AppContent1 from '@/components/AppContent1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Sender',
      component: Sender
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/app1',
      name: 'AppContent1',
      component: AppContent1
    }
  ]
})
