import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/css/reset.less';

Vue.config.productionTip = false;
Vue.use(Antd);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
// npm install ant-design-vue --save;
// npm install @ant-design/icons-vue --save
// npm install less less-loader --save
