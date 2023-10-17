import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../shared/views/HomeView.vue'
import AboutViewVue from '../shared/views/AboutView.vue'
import { pokemonRoute } from '@/pokemons/router'
import Counter1View from '@/counter/views/Counter1View.vue'
import CounterSeptupViewVue from '@/counter/views/CounterSeptupView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutViewVue
    },
    {
      path: '/counter-1',
      name: 'counter-1',
      component: Counter1View
    },
    {
      path: '/counter-2',
      name: 'counter-2',
      component: CounterSeptupViewVue
    },
    {
      path: '/counter',
      name: 'counter',
      component: () => import('../counter/views/CounterView.vue')
    },
    {
      ...pokemonRoute,
      path: '/pokemons',
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: () => ({ name: 'home' }),
    }
  ]
})

export default router
