<template>
  <PokemonCard
    v-if="selectedPokemon"
    :pokemon="selectedPokemon"
    :showName="true"
    :showImage="true"
    :showType="true"
    :showPokemon="false"
    :showAllPokemon="true"
  />
</template>

<script setup lang="ts">
import PokemonCard from '@/components/PokemonCard.vue'
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import { usePokemonStore } from '@/store/Pokemons'

const route = useRoute()
const idPokemon = route.params.id
const pokemonStore = usePokemonStore()
const selectedPokemon = ref(pokemonStore.getPokemonById(Number(idPokemon)))
</script>
