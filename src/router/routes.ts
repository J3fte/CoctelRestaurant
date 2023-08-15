import { RouteRecordRaw } from 'vue-router'
import cocteles from './cocteles'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/default/index.vue'),
    children: [
      {
        path: '',
        name: 'coctel',
        redirect: { name: 'resources.cocteles.index' }
      }
    ]
  },
  ...cocteles,
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
