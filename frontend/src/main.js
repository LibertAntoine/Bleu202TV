import Vue from 'vue'
import Vuex from 'vuex'
import SuiVue from 'semantic-ui-vue';
import fullscreen from 'vue-fullscreen'
import VueRouter from 'vue-router';
import logStore from '@/services/logStore'
import datas from '@/services/data'

Vue.prototype.$logStore = logStore
Vue.prototype.$datas = datas
Vue.prototype.$fullscreen = fullscreen

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(fullscreen)

import 'semantic-ui-css/semantic.min.css';
Vue.use(SuiVue);

import routes from './routes/router';

const router = new VueRouter({
    mode:'history',
    routes
})

Vue.use(VueRouter)

new Vue({
  render: h => h(require('./App').default),
  router
}).$mount('#app')
