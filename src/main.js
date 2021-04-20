import Vue from 'vue';
import App from './App';
import AboutPage from './components/About/AboutPage';
import HomePage from './components/Homepage/Homepage';
import MySkillsPage from './components/MySkills/MySkillsPage';
import VueRouter from 'vue-router';


Vue.use(VueRouter)
Vue.config.productionTip = false
export const bus = new Vue();

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
        path: 'skills',
        component: MySkillsPage
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
  mode: 'hash',
})

new Vue({
  router,
  
  render: h => h(App),
}).$mount('#app')
