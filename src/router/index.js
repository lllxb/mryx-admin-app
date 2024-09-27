import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/layout/HomePage.vue';
import Login from '../views/layout/userLogin.vue';
import store from '@/store';
import getMenuRoutes from '@/utils/permission';
Vue.use(VueRouter);

const asyncRouterMap = [
  {
    path: '/product',
    name: 'Product',
    meta: {
      title: '商品',
      icon: 'inbox',
      hidden: false,
    },
    component: Home,
    children: [
      {
        path: 'list',
        name: 'ProductList',
        meta: {
          title: '商品列表',
          icon: 'unordered-list',
          hidden: false,
        },
        component: () => import('@/views/page/productList.vue')
      },
      {
        path: 'add',
        name: 'ProductAdd',
        meta: {
          title: '添加商品',
          icon: 'file-add',
          hidden: false,
        },
        component: () => import('@/views/page/productAdd.vue')
      },
      {
        path: 'category',
        name: 'Category',
        meta: {
          title: '类目管理',
          icon: 'project',
          hidden: false,
        },
        component: () => import('@/views/page/category.vue')
      }
    ],
  }
]

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/index',
    meta: {
      title: '首页',
      icon: 'home',
      hidden: false,
    },
    children: [{
      path: 'index',
      name: 'index',
      meta: {
        title: '统计',
        icon: 'number',
        hidden: false,
      },
      component: () => import('../views/page/index.vue'),
    }]
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录',
      icon: '',
      hidden: true,
    },
    component: Login,
  },
];

const router = new VueRouter({
  routes,
});

let isAddRoutes = false;

router.beforeEach(function (to, from, next) {
  if (to.path !== '/login') {
    if (store.state.user.appkey && store.state.user.username && store.state.user.role) {
      if (!isAddRoutes) {
        const menuRoutes = getMenuRoutes(store.state.user.role, asyncRouterMap);

        // router.addRoutes(menuRoutes);
        store.dispatch('changeMenuRoutes', routes.concat(menuRoutes)).then(() => {
          menuRoutes.forEach(route => {
            router.addRoute(route);
          });
          next();
        });
        isAddRoutes = true;
      }
      return next();
    } else {
      return next('/login');
    }
  }
  return next();
})

export default router;
