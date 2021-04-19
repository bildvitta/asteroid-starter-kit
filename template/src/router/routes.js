const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),

    children: [
      {
        name: 'Root',
        path: '',
        // meta: { requiresAuth: true },
        component: () => import('pages/Index.vue')
      }
    ]
  }
]

export default routes
