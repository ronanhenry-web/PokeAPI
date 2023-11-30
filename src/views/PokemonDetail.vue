<template>
  <Header />
  <Card v-if="pokemonStore.detailsPokemon">
    <template #title> {{ $t('name') }} : {{ pokemonStore.detailsPokemon.name }} </template>
    <template #subtitle> Type : {{ pokemonStore.detailsPokemon.types.join(', ') }} </template>
    <template #content>
      <Image :src="pokemonStore.detailsPokemon.imgUrl" :alt="pokemonStore.detailsPokemon.name" />
    </template>
    <template #footer>
      <router-link to="/pokemons/accueil">{{ $t('btnBack') }}</router-link>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import Card from 'primevue/card'
import Image from 'primevue/image'

import { usePokemonStore } from '@/store/Pokemons'

import Header from '@/components/Header.vue'

const route = useRoute()
const idPokemon = route.params.id
const pokemonStore = usePokemonStore()

pokemonStore.getPokemonDetails(Number(idPokemon))
</script>
