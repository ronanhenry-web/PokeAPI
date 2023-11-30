import { defineStore } from 'pinia'
import axios from '@/utils/axios'
import type { Pokemon } from '@/models/Pokemon'
import getRandomNumber from '@/utils/random'

export const usePokemonStore = defineStore('pokemon', {
  state: () => {
    return {
      pokemons: [] as Pokemon[],
    }
  },
  getters: {
    getPokemons: (state) => state.pokemons,
    getPokemonById: (state) => (id: number) => {
      return state.pokemons.find((pokemon) => pokemon.id === id)
    },
  },

  actions: {
    fetchWithRandom() {
      for (let i = 1; i <= 10; i++) {
        const randomId = getRandomNumber()
        this.fetchPokemons(randomId)
      }
    },

    fetchPokemons(id: number) {
      return axios
        .get(`/pokemon/${id}`)
        .then((response) => {
          this.pokemons.push({
            id: id,
            name: response.data.name,
            imgUrl: response.data.sprites.front_default,
            types: response.data.types.map((type: any) => type.type.name),
          })
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
})
