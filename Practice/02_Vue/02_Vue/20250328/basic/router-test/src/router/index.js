import {
  createRouter,
  createWebHistory,
  isNavigationFailure,
} from 'vue-router';

import Home from '@/pages/HomePage.vue';
import About from '@/pages/AboutPage.vue';
import Members from '@/pages/MembersPage.vue';
import Videos from '@/pages/VideosPage.vue';
import MemberInfo from '@/pages/MemberInfoPage.vue';
import NotFound from '@/pages/NotFound.vue';

const membersIdGuard = (to, from) => {
  if (from.name !== 'members' && from.name !== 'members/id') {
    return false;
  }
};

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/members', name: 'members', component: Members },
    {
      path: '/members/:id',
      name: 'members/id',
      component: MemberInfo,
      beforeEnter: membersIdGuard,
    },
    {
      path: '/videos',
      name: 'videos',
      component: Videos,
      // children: [
      //   {
      //     path: ':id',
      //     name: 'videos/id',
      //     component: VideoPlayer,
      //   },
      // ],
    },
    { path: '/:paths(.*)*', name: 'NotFound', component: NotFound },
  ],
});

router.beforeEach((to) => {
  if (to.query && Object.keys(to.query).length > 0) {
    return { path: to.path, query: {}, params: to.params };
  }
});

router.afterEach((to, from, failure) => {
  if (isNavigationFailure(failure)) {
    console.log('@@ 내비게이션 중단 : ', failure);
    return { name: 'home' };
  }
});

export default router;
