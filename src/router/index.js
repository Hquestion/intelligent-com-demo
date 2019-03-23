import Vue from 'vue';
import VueRouter from '../assets/lib/vue-router.common';

Vue.use(VueRouter);

import Home from '../views/Home';

const router = new VueRouter({
    routes: [
        {
            path: '/home',
            name: 'Home',
            component: Home,
            children: [
                {
                    path: 'tab-one',
                    name: 'TabOne',
                    component: () => import('../views/home-tab/TabOne')
                },
                {
                    path: 'tab-two',
                    name: 'TabTwo',
                    component: () => import('../views/home-tab/TabTwo')
                }
            ]
        }
    ]
});

export default router;
