import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import {msalInstance} from '../lib/microsoftGraph.js'

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
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
            next('/');
        } else {
            next();
        }
    } else {
        next();
    }
});
export default router
