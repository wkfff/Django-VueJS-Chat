// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/store';
import VueRouter from 'vue-router';
import { routes } from "./routes";

Vue.use(VueRouter)

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
