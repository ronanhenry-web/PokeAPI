<template>
  <Card>
    <template #title>
      {{ pokemon.name }}
    </template>
    <template #content>
      <Image :src="pokemon.imgUrl" :alt="pokemon.name" />
    </template>
    <template #footer>
      <Button label="Détails" size="small" @click="showDetails" />
    </template>
  </Card>
</template>

<script setup lang="ts">
import type { Pokemon } from '@/models/Pokemon'
import { defineProps, defineEmits } from 'vue'
import Card from 'primevue/card'
import Button from 'primevue/button'
import Image from 'primevue/image'

const props = defineProps<{ pokemon: Pokemon }>()

const emit = defineEmits<{
  (event: 'show-details', pokemon: Pokemon): void
}>()

function showDetails() {
  emit('show-details', props.pokemon)
}
</script>
