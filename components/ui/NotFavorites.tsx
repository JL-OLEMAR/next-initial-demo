import { Container, Image, Text } from '@nextui-org/react'

export function NotFavorites() {
  return (
    <Container css={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      height: 'calc(100vh - 100px)'
    }}
    >
      <Text h1>No hay favoritos</Text>
      <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg'
        alt='Pokemon'
        height={250}
        width={250}
        css={{ opacity: 0.1 }}
      />
    </Container>
  )
}
