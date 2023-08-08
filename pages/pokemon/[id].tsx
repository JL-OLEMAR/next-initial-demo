/* eslint-disable @typescript-eslint/no-floating-promises */
import { useEffect, useState } from 'react'
import type { GetStaticPaths, GetStaticProps } from 'next'
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react'
import confetti from 'canvas-confetti'

import { Layout } from '../../components'
import { toggleFavorites, exitsInFavorites, getPokemonInfo } from '../../utils'
import { PokemonResp } from '../../intefaces'

interface Props {
  pokemon: PokemonResp
}

export default function Pokemon({ pokemon }: Props) {
  const [isInFavorites, setIsInFavorites] = useState(false)

  useEffect(() => {
    setIsInFavorites(exitsInFavorites(pokemon.id))
  }, [pokemon.id])

  const onToggleFavorite = () => {
    toggleFavorites(pokemon.id)
    setIsInFavorites(!isInFavorites)

    if (isInFavorites) return

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0
      }
    })
  }

  return (
    <Layout title={`Pokemon ${pokemon.name}`}>
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

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemons151 = [...Array(151)].map((_, i) => `${i + 1}`)

  return {
    paths: pokemons151.map(id => ({
      params: { id }
    })),
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { id } = ctx.params as { id: string }
  const pokemon = await getPokemonInfo(id)

  if (pokemon == null) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: { pokemon },
    revalidate: 84600 // seconds === 24 hours
  }
}
