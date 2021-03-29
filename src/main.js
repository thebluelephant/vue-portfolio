import Vue from 'vue';
import App from './App';
import AboutPage from './components/About/AboutPage';
import HomePage from './components/Homepage/Homepage';
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '*', redirect: '/home' },
  {
    path: '/',
    component: App,
    redirect : '/home',
    children: [
      {
        path: 'about',
        component: AboutPage
      },
      {
        path: 'home',
        component: HomePage
      },
    ]
  }

]
const router = new VueRouter({
  routes, // raccourci pour `routes: routes`
  mode: 'history',
})

new Vue({
  router,
  
  render: h => h(App),
}).$mount('#app')
