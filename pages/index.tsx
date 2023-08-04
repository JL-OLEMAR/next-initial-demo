import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'

export default function Home() {
  return (
    <MainLayout>
      <h1>Home Page</h1>

      <h3 className='title'>
        Ir a <Link className='custom-link' href='/about'>About</Link>
        <hr />
        <Link className='custom-link' href='/contact'>Contact</Link>
      </h3>

      <p className='description'>
        Get stated by editing{' '}
        <code className='code'>pages/index.tsx</code>
      </p>
    </MainLayout>
  )
}
