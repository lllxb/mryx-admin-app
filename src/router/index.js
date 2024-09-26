import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/layout/HomePage.vue';
import Login from '../views/layout/userLogin.vue';
import store from '@/store';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutPage.vue'),
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach(function (to, from, next) {
  if (to.path !== '/login') {
    if (store.state.user.appkey && store.state.user.username && store.state.user.role) {
      return next();
    } else {
      return next('/login');
    }
  }
  return next();
})

export default router;
