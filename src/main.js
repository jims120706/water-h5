import Vue from 'vue'
import App from './App.vue'
import routes from './router'
import VueRouter from 'vue-router';

Vue.use(VueRouter);
Vue.config.productionTip = false


const router = new VueRouter({
  mode: 'hash',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})

/**
 * 全局路由守卫
 * 设置标题
 */
router.beforeEach((to, from, next) => {
  const { path } = to;
  const { title = '门诊预约' } = to.meta;
  /**
   * 医生排班页面的title是动态的
   */
  if (path !== '/doctor_scheduling') {
    document.title = title;
  } else {
    document.title = to.query.title;
  }
  next()
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
