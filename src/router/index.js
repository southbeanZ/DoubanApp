import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index/Index'
import AudioBook from '@/pages/AudioBook/AudioBook'
import Broadcast from '@/pages/Broadcast/Broadcast'
import Group from '@/pages/Group/Group'
import Mine from '@/pages/Mine/Mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/audiobook',
      name: 'audiobook',
      component: AudioBook
    },
    {
      path: '/broadcast',
      name: 'broadcast',
      component: Broadcast
    },
    {
      path: '/group',
      name: 'group',
      component: Group
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/index',
      redirect: '/'
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
