import { pokeApi } from '../api'
import { PokemonResp } from '../intefaces'

export async function getPokemonInfo(nameOrId: string) {
  try {
    const { data } = await pokeApi.get<PokemonResp>(`/pokemon/${nameOrId}`)

    return {
      id: data.id,
      name: data.name,
      sprites: data.sprites
    }
  } catch (err) {
    return null
  }
}
