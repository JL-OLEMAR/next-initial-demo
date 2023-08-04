import type { ReactElement } from 'react'
import Link from 'next/link'
import { DarkLayout } from '../components/layouts/DarkLayout'
import { MainLayout } from '../components/layouts/MainLayout'

export default function About() {
  return (
    <>
      <h1>About Page</h1>

      <h3 className='title'>
        Ir a <Link className='custom-link' href='/'>Home</Link>
      </h3>

      <p className='description'>
        Get stated by editing{' '}
        <code className='code'>pages/about.tsx</code>
      </p>
    </>
  )
}

About.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}
