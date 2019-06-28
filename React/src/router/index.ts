import NestedRoute from './NestedRoute'
import StatusRoute from './StatusRoute'
import { fetchTopList, fetchTopDetail } from '../redux/actions'

import loadable from '@loadable/component'

const router = [
  {
    path: '/',
    exact: true,
    component: loadable(() => import('../views/Home/Home'))
  },
  {
    path: '/home',
    component: loadable(() => import('../views/Home/Home'))
  },
  {
    path: '/top-list',
    component: loadable(() => import('../views/TopList/TopList')),
    exact: true,
    asyncData(store) {
      return store.dispatch(fetchTopList())
    }
  },
  {
    path: '/top-list/:id',
    component: loadable(() => import('../views/TopDetail/TopDetail')),
    asyncData(store, params) {
      return store.dispatch(fetchTopDetail(params.id))
    }
  }
]

export default router

export {
  router,
  NestedRoute,
  StatusRoute
}
