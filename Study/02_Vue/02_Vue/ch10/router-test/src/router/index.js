import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/pages/HomePage.vue';
import About from '@/pages/AboutPage.vue';
import Members from '@/pages/MembersPage.vue';
import Videos from '@/pages/VideosPage.vue';
import MemberInfo from '@/pages/MemberInfoPage.vue';
import Test from '@/pages/Test.vue';
import TestChild from '@/pages/TestChild.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/members', component: Members },
    // { path: '/videos', component: Videos},
    { path: '/test', component: Test },
    { path: '/testChild', component: TestChild },

    // 명명된 라우트
    {
      path: '/videos',
      component: Videos,
      name: 'vi',
    },

    //  동적 라우트
    {
      path: '/members/:id', // 동적 라우트
      component: MemberInfo,
    },

    // 중첩 라우트
    {
      path: '/test', // 동적 라우트
      component: Test,

      children: [
        {
          path: ':num',
          component: TestChild,
          name: 'test/num',
        },
      ],
    },
  ],
});

export default router;
