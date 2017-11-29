import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
import recommend from '@/components/recommend/recommend';
import rank from '@/components/rank/rank';
import tab from '@/components/tab/tab';
import singer from '@/components/singer/singer';
import search from '@/components/search/search';
import singerDetail from '@/components/singer-detail/singer-detail';

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/recommend'
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: recommend
    },
    {
      path: '/rank',
      name: 'rank',
      component: rank
    },
    {
      path: '/singer',
      name: 'singer',
      component: singer,
      children:[
        {
          path:':id',
          component:singerDetail
        }
      ]
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/tab',
      name: 'tab',
      component: tab
    }
  ]
})
