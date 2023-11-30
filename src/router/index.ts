import AccueilVue from '@/views/Accueil.vue'
import PokemonDetail from '@/views/PokemonDetail.vue'
import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/pokemons/accueil', component: AccueilVue },
    {
      path: '/pokemons/:id',
      name: 'PokemonRoute',
      component: PokemonDetail,
    },
  ],
})
