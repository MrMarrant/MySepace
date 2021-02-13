import Profile from "../views/Profile.vue";
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile
    },

    {
      path: "/Add",
      name: "Add",
      component: () => import(/* webpackChunkName: "about" */ '../views/Add.vue')
    }
  ]
});

export default router;

