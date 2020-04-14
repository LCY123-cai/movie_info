import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index'
import './plugins/element.js'
import Router from 'vue-router'
import './components'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

const routerPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}
