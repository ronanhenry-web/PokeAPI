<template>
  <div>
    <div class="pokemon-row">
      <div class="pokemon-cell" v-for="pokemon in pokemonStore.pokemons" :key="pokemon.id">
        <PokemonCard :pokemon="pokemon" @show-details="displayDetails(pokemon)" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PokemonCard from '@/components/PokemonCard.vue'
import type { Pokemon } from '@/models/Pokemon'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
import { usePokemonStore } from '@/store/Pokemons'

const router = useRouter()

const pokemonStore = usePokemonStore()

onMounted(() => {
  pokemonStore.getPokemons()
})

pokemonStore.getPokemons()

const displayDetails = (pokemon: Pokemon) => {
  router.push({ name: 'PokemonRoute', params: { id: pokemon.id } })
}
</script>

<style scoped>
.pokemon-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.pokemon-cell {
  width: 100%;
}
.pokemon-details {
  margin: 20px;
  text-align: center;
  background-color: rgb(196, 196, 51);
}
</style>
