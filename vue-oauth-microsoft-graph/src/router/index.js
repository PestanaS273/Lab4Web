import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import {msalInstance} from '../services/PublicClientApplication.js'
import UserPage from '../pages/UserPage.vue'

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/user',
        name: 'UserPage',
        component: UserPage
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
router.beforeEach(async (to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        const account = msalInstance.getActiveAccount();

        if (!account) {
            next('/user');
        } else {
            next();
        }
    } else {
        next();
    }
});
export default router
