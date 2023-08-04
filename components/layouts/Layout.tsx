import type { ReactNode } from 'react'
import Head from 'next/head'
import { Navbar } from '../ui'

interface Props {
  children: ReactNode
  title?: string
}

// Get the origin of the current page
const origin = (typeof window === 'undefined') ? '' : window.location.origin

export function Layout({ children, title = 'PokemonApp' }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='author' content='José Olemar' />
        <meta name='description' content='Información sobre el pokémon Pikachu' />
        <meta name='keywords' content='pokemon, pikachu, pokedex' />

        <meta property='og:title' content={`Información sobre ${title}`} />
        <meta property='og:description' content={`Esta es la página sobre ${title}`} />
        <meta property='og:image' content={`${origin}/img/pokemons.png`} />
      </Head>

      <Navbar />

      <main style={{ padding: '0 20px' }}>
        {children}
      </main>
    </>
  )
}
