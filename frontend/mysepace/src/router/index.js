import Profile from "../views/Profile.vue";
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Article from  '../views/Article.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile
    },
    {
      path: "/article/:id",
      name: "article",
      component: Article
    },
    {
      path: "/Add",
      name: "Add",
      component: () => import(/* webpackChunkName: "about" */ '../views/Add.vue')
    }
  ]
});
export default router;

