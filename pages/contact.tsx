import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'

export default function Contact() {
  return (
    <MainLayout>
      <h1>Contact Page</h1>

      <h3 className='title'>
        Ir a <Link className='custom-link' href='/'>Home</Link>
      </h3>

      <p className='description'>
        Get stated by editing{' '}
        <code className='code'>pages/contact.tsx</code>
      </p>
    </MainLayout>
  )
}
