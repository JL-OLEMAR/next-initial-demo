import NextLink from 'next/link'
import { Image, Spacer, Text, useTheme, Link } from '@nextui-org/react'

export function Navbar() {
  const { theme } = useTheme()

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'start',
      alignItems: 'center',
      width: '100%',
      padding: '0 20px',
      backgroundColor: theme?.colors.gray900.value
    }}
    >
      <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
        alt='icono de la app'
        width={70}
        height={70}
      />

      <NextLink href='/' passHref>
        <Link>
          <Text color='white' h2>P</Text>
          <Text color='white' h3>okémon</Text>
        </Link>
      </NextLink>

      <Spacer css={{ flex: 1 }} />

      <NextLink href='/favorites' passHref>
        <Link css={{ marginRight: '20px' }}>
          <Text color='white'>Favoritos</Text>
        </Link>
      </NextLink>
    </div>
  )
}
