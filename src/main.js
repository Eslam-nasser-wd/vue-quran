// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import App from './App'

import Search from './components/Search'
import Single from './components/Single'

Vue.use(vueResource)
Vue.use(VueRouter)

const routes = [
  {path: '/', component: Search},
  {path: '/single', component: Single}
]

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes
})

const app = new Vue({
  router
}).$mount('#app')

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })
