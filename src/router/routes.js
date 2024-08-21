export default [
    {
        path: '/',
        component: () => import('@/layout/layout-main.vue'),
        children: [
            {
                name: 'home',
                path: '',
                component: () => import('@/views/home-template.vue')
            },
            {
                name: 'pattern',
                path: 'pattern',
                component: () => import('@/views/pattern-template.vue')
            },
        ]
    }
];