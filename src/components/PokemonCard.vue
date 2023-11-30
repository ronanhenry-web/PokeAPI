<template>
  <Card>
    <template #title>
      {{ showName ? pokemon.name : '' }}
    </template>
    <template #subtitle>
      <div v-if="showType">Type: {{ pokemon.types.join(', ') }}</div>
    </template>
    <template #content>
      <Image v-if="showImage" :src="pokemon.imgUrl" :alt="pokemon.name" />
    </template>
    <template #footer>
      <Button v-if="showPokemon" label="Détails" size="small" @click="showDetails" />
      <router-link v-if="showAllPokemon" to="/pokemons/accueil">Revenir à l'accueil</router-link>
    </template>
  </Card>
</template>

<script setup lang="ts">
import type { Pokemon } from '@/models/Pokemon'
import { defineProps, defineEmits } from 'vue'
import Card from 'primevue/card'
import Button from 'primevue/button'
import Image from 'primevue/image'

const props = defineProps<{
  pokemon: Pokemon
  showName: boolean
  showImage: boolean
  showType: boolean
  showPokemon: boolean
  showAllPokemon: boolean
}>()

const emit = defineEmits<{
  (event: 'show-details', pokemon: Pokemon): void
}>()

function showDetails() {
  emit('show-details', props.pokemon)
}
</script>
