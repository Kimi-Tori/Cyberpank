export default [
    {
        path: '/',
        component: () => import('@/layout/layout-main.vue'),
        children: [
            {
                name: 'home',
                path: '', // Путь относительно базового пути
                component: () => import('@/views/home-template.vue')
            },
            {
                name: 'pattern',
                path: '/:pathMatch(.*)*', // Путь относительно базового пути
                component: () => import('@/views/pattern-template.vue')
            },
        ],
    },
];