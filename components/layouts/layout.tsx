import { type ReactNode } from 'react'
import Head from 'next/head'
import { Navbar } from '../ui'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>NextJS Starter</title>
      </Head>

      <nav>
        <Navbar />
      </nav>

      <main style={{ padding: '20px 50px' }}>
        {children}
      </main>
    </>
  )
}
