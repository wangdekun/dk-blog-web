import layoutvue from './layout.vue'
const layout = {
  install (Vue) {
    Vue.component('layout', layoutvue)
  }
}
export default layout