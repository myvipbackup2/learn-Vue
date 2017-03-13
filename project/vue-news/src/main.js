import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routerConfig from './routerConfig'
import store from './store/index'
import axios from 'axios'

Vue.use(VueRouter);
Vue.use(axios);

require('./assets/css/base.css');//引入全局的base文件

const router = new VueRouter({
    mode: 'history',  //路由改变  index/#/home => index/home
    routes: routerConfig
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
