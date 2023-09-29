import Link from 'next/link'
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material'
import { MenuOutlined } from '@mui/icons-material'

export function Navbar() {
  return (
    <AppBar position='sticky' elevation={0}>
      <Toolbar>
        <IconButton
          size='large'
          edge='start'
        >
          <MenuOutlined />
        </IconButton>

        <Link href='/'>
          <Typography variant='h6' color='white'>Cookie App</Typography>
        </Link>
        <div style={{ flex: 1 }} />
        <Link href='/theme-changer'>
          <Typography variant='h6' color='white'>Change Theme</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  )
}
