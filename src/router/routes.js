export default [
    {
        path: '/',
        component: () => import('@/layout/layout-main.vue'),
        children: [
            {
                name: '404',
                path: '/:catchAll(.*)',
                component: () => import('@/views/error-template.vue')
            },
            {
                name: 'home',
                path: '/Cyberpank/',
                component: () => import('@/views/home-template.vue')
            },
            {
                name: 'pattern',
                path: '/pattern/',
                component: () => import('@/views/pattern-template.vue')
            },
        ],
    },
];