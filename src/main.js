import Vue from "vue";
import App from "./App";
import AboutPage from "./pages/AboutPage.vue";
import HomePage from "./pages/Homepage.vue";
import MySkillsPage from "./pages/MySkillsPage.vue";
import ProjectsPage from "./pages/ProjectsPage.vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  { path: "*", redirect: "/home" },
  {
    path: "/",
    component: App,
    redirect: "/home",
    children: [
      {
        path: "about",
        component: AboutPage,
      },
      {
        path: "skills",
        component: MySkillsPage,
      },
      {
        path: "home",
        component: HomePage,
      },
      {
        path: "projects",
        component: ProjectsPage,
      },
    ],
  },
];
const router = new VueRouter({
  routes, // raccourci pour `routes: routes`
  mode: "hash",
});

new Vue({
  router,

  render: (h) => h(App),
}).$mount("#app");
