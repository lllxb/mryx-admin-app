import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import Vue from 'vue';
import VCharts from 'v-charts';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/css/reset.less';


Vue.config.productionTip = false;
Vue.use(Antd);

Vue.use(VCharts);


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

