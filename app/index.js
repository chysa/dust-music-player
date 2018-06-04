// @flow
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import App from './App';
import router from './router';


new Vue({ router,render: h => h(App) }).$mount('#init');
