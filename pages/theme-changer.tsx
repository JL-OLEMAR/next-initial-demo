import { type ChangeEvent, useState, useEffect } from 'react'
import { type GetServerSideProps } from 'next'
import axios from 'axios'
import Cookies from 'js-cookie'
import {
  Button,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup
} from '@mui/material'
import { Layout } from '@/components/layouts'

interface ThemeChangerProps {
  theme: string
}

export default function ThemeChanger({ theme }: ThemeChangerProps) {
  const [currentTheme, setCurrentTheme] = useState(theme)
  console.log({ theme })

  useEffect(() => {
    console.log('LocalStorage---> ', localStorage.getItem('theme'))
    console.log('Cookies---> ', Cookies.get('theme'))
  }, [])

  const onThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedTheme = event.target.value
    console.log({ selectedTheme })
    setCurrentTheme(selectedTheme)

    localStorage.setItem('theme', selectedTheme)
    Cookies.set('theme', selectedTheme)
  }

  const handleClick = async () => {
    const { data } = await axios.get('/api/hello')
    console.log({ data })
  }

  return (
    <Layout>
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>Theme</FormLabel>
            <RadioGroup
              value={currentTheme}
              onChange={onThemeChange}
            >
              <FormControlLabel
                value='light'
                control={<Radio />}
                label='Light'
              />
              <FormControlLabel
                value='dark'
                control={<Radio />}
                label='Dark'
              />
              <FormControlLabel
                value='custom'
                control={<Radio />}
                label='Custom'
              />
            </RadioGroup>
          </FormControl>

          <Button
            onClick={() => { void handleClick() }}
            type='button'
          >
            Request
          </Button>
        </CardContent>
      </Card>
    </Layout>
  )
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { theme = 'light', name = 'No name' } = req.cookies
  const validThemes = ['light', 'dark', 'custom']

  return {
    props: {
      theme: validThemes.includes(theme) ? theme : 'dark',
      name
    }
  }
}
