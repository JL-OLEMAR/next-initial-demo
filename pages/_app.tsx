import { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import { CssBaseline, Theme, ThemeProvider } from '@mui/material'
import Cookies from 'js-cookie'

import { customTheme, darkTheme, lightTheme } from '@/themes'
import '@/styles/globals.css'

interface Props extends AppProps {
  theme: string
}
export default function App({ Component, pageProps, theme = 'dark' }: Props) {
  const [currentTheme, setCurrentTheme] = useState<Theme>(lightTheme)

  useEffect(() => {
    const cookieTheme = Cookies.get('theme') ?? 'light'
    const selectedTheme = cookieTheme === 'light'
      ? lightTheme
      : (cookieTheme === 'dark') ? darkTheme : customTheme

    setCurrentTheme(selectedTheme)
  }, [])

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

// App.getInitialProps = async (appContext: AppContext) => {
//   const { theme } = appContext.ctx.req
//     ? (appContext.ctx.req as any).cookies
//     : { theme: 'light' }

//   const validThemes = ['light', 'dark', 'custom']

//   return {
//     theme: validThemes.includes(theme) ? theme : 'light'
//   }
// }
