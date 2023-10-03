import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../shared/views/HomeView.vue'
import AboutViewVue from '../shared/views/AboutView.vue'
import { pokemonRoute } from '@/pokemons/router'

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
