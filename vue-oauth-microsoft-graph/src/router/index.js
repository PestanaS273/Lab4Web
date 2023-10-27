import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ConversationsIndexPage from '../pages/ConversationsIndexPage.vue'
import ConversationsShowPage from '../pages/ConversationsShowPage.vue'
import store from '../store'


const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/conversations',
        name: 'ConversationsIndexPage',
        component: ConversationsIndexPage,
        meta:{requiresAuth: true},
    },
    {
        path: '/conversations/:id',
        name: 'ConversationsShowPage',
        component: ConversationsShowPage,
        props: true,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        const user = store.state.user;

        if (!user) {
            next('/');
        } else {
            next();
        }
    } else {
        next();
    }
});
export default router
