import { useEffect, useState } from 'react'
import { Layout, NotFavorites, FavoritePokemons } from '../../components'
import { pokemons } from '../../utils'

export default function Favorites() {
  const [favoritePokemons, setFavoritePokemon] = useState<number[]>([])

  useEffect(() => {
    setFavoritePokemon(pokemons())
  }, [])

  return (
    <Layout title='Pokemons - Favoritos'>
      {
        favoritePokemons.length > 0
          ? <FavoritePokemons pokemons={favoritePokemons} />
          : <NotFavorites />
      }

    </Layout>
  )
}
