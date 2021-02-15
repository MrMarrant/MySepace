import Profile from "../views/Profile.vue";
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Article from '../views/Article.vue'
import FormAddArticle from '../views/FormAddArticle.vue'

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
            path: "/addArticle",
            name: "addArticle",
            component: FormAddArticle
        },
        {
            path: "/admin",
            name: "Admin",
            component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue')
        }
    ]
});
export default router;

