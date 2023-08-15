export default [
  {
    path: '/',
    component: () => import('layouts/default/index.vue'),
    children: [
      {
        path: '',
        name: 'resources.cocteles.index',
        component: () => import('pages/IndexPage.vue'),
        meta: {
          title: 'Coctles'
        }
      }
    ]
  }
]
