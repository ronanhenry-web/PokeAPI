import { defineStore } from 'pinia'
import axios from '@/utils/axios'
import type { Pokemon } from '@/models/Pokemon'

export const usePokemonStore = defineStore('pokemon', {
  state: () => {
    return {
      pokemons: [] as Pokemon[],
      detailsPokemon: null as Pokemon | null,
    }
  },
  actions: {
    generatePokemonImageUrl(id: number) {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    },

    getPokemons() {
      axios
        .get('/pokemon')
        .then((response) => {
          const shuffledPokemons = response.data.results.map((el: any) => {
            const parts = el.url.split('/')
            const id = parts[parts.length - 2]
            return {
              id,
              name: el.name,
              imgUrl: this.generatePokemonImageUrl(id),
            } as Pokemon
          })
          shuffledPokemons.sort(() => Math.random() - 0.5)
          this.pokemons = shuffledPokemons
        })
        .catch((error) => {
          console.log(error)
        })
    },

    async getPokemonDetails(idP: number) {
      await axios
        .get(`/pokemon/${idP}`)
        .then((response) => {
          const { name, id, sprites, types } = response.data
          console.log(response)
          this.detailsPokemon = {
            id,
            name,
            imgUrl: sprites.front_default,
            types: types.map((el: any) => el.type.name),
          } as Pokemon
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
})
