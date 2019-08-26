import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '../components/login/login'
import index from '../components/index/index'
import ckeditor from '../components/editor/ckeditor'
import markdown from '../components/markdown/markdown'
import home from '../components/view/home'
Vue.use(Router)

export default new Router({
  mode: 'history',  //去掉url中的#
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/ckeditor',
      name: 'ckeditor',
      component: ckeditor
    },
    {
      path: '/markdown',
      name: 'markdown',
      component: markdown
    },
    {
      path: '/home',
      name: 'home',
      title:'首页',
      component: home
    }
  ]
})
