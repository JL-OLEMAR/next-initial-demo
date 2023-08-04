import { useEffect, useState } from 'react'
import type { GetStaticPaths, GetStaticProps } from 'next'
import { Grid, Card, Button, Container, Text, Image } from '@nextui-org/react'

import { Layout } from '../../components'
import { pokeApi } from '../../api'
import { exitsInFavorites, getPokemonInfo, toggleFavorites } from '../../utils'
import { PokemonListResponse, PokemonResp } from '../../intefaces'

interface Props {
  pokemon: PokemonResp
}

export default function PokemonByName({ pokemon }: Props) {
  const [isInFavorites, setIsInFavorites] = useState(false)

  useEffect(() => {
    setIsInFavorites(exitsInFavorites(pokemon.id))
  }, [pokemon.id])

  const onToggleFavorite = () => {
    toggleFavorites(pokemon.id)
    setIsInFavorites(!isInFavorites)
  }
  return (
    <Layout title={`Pokemon by name: ${pokemon.name}`}>

      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card hoverable clickable css={{ padding: '30px', cursor: 'pointer' }}>
            <Card.Body css={{ p: 1 }}>
              <Card.Image
                src={pokemon.sprites.other?.dream_world.front_default ?? '/no-img.png'}
                alt={pokemon.name}
                width='100%'
                height={140}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text h1 transform='capitalize'>{pokemon.name}</Text>
              <Button
                onClick={onToggleFavorite}
                color='gradient'
                ghost={!isInFavorites}
              >
                {isInFavorites ? 'In favorites' : 'Save to favorites'}
              </Button>
            </Card.Header>

            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container direction='row' display='flex' gap={0}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>

    </Layout>
  )
}

// Return the param pokemon name
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  const pokemonNames: string[] = data.results.map(pokemon => pokemon.name)

  return {
    paths: pokemonNames.map((name) => ({
      // Should return an object with params: { name: 'pikachu' }
      params: { name }
    })),
    fallback: false // Return 404
  }
}

// Return the props of the pokemon
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Obtener el id del array del contexto de los params
  const { name } = params as { name: string }

  return {
    props: {
      pokemon: await getPokemonInfo(name)
    }
  }
}
