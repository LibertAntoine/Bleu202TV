import Vue from 'vue'
import App from './App.vue'
import SuiVue from 'semantic-ui-vue';
import VueRouter from 'vue-router';

Vue.config.productionTip = false


import 'semantic-ui-css/semantic.min.css';
Vue.use(SuiVue);

import routes from './routes/router';

const router = new VueRouter({
    mode:'history',
    routes
})

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
