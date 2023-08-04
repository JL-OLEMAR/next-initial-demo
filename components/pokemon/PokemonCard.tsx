/* eslint-disable @typescript-eslint/no-floating-promises */
import { useRouter } from 'next/router'
import { Grid, Card, Row, Text } from '@nextui-org/react'
import { SmallPokemon } from '../../intefaces'

interface Props {
  pokemon: SmallPokemon
}

export function PokemonCard({ pokemon }: Props) {
  const router = useRouter()

  const { id, name, img } = pokemon

  const onClick = () => {
    router.push(`/name/${name}`)
  }

  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
      <Card hoverable clickable onClick={onClick}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image
            src={img}
            alt={name}
            width='100%'
            height={140}
            loading='lazy'
          />
        </Card.Body>

        <Card.Footer>
          <Row justify='space-between'>
            <Text transform='capitalize'>{name}</Text>
            <Text>#{id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  )
}
