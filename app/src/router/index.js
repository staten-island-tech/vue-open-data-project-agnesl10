import { createRouter, createWebHistory } from 'vue-router'
import ShowData from '@/views/ShowData.vue'
import ChartOne from '@/views/ChartOne.vue'
import ChartTwo from '@/views/ChartTwo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ShowData,
    },
    {
      path: '/chartone',
      name: 'one',
      component: ChartOne,
    },
    {
      path: '/charttwo',
      name: 'two',
      component: ChartTwo,
    },
  ],
})

export default router
