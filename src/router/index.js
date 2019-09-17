import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '@/components/Recommend'
import RecommendDetail from '@/components/RecommendDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend,
      children: [{
        path: ':id',
        component: RecommendDetail
      }]
    }
  ]
})
