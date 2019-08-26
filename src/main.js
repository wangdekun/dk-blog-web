// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import CKEditor from '@ckeditor/ckeditor5-build-decoupled-document'
import CKEditor from '@ckeditor/ckeditor5-vue'
import layout from './components/layout'
import topmenu from './components/topmenu'
import lefttopinfo from './components/lefttopinfo'
import leftmain from './components/leftmain'
// 侧边栏
Vue.use(layout)
// 顶部栏
Vue.use(topmenu)
// 侧部(放置头像等信息)
Vue.use(lefttopinfo)
// 侧部(放置文章类型等等信息)
Vue.use(leftmain)



Vue.config.productionTip = false
Vue.use(Element)
// CKEditor编辑器
Vue.use( CKEditor );

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
