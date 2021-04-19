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
  },

  // TODO: This should come from asteroid
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
