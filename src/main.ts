import Vue from 'vue';
import './plugins/vuetify';
import App from './pages/App.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
