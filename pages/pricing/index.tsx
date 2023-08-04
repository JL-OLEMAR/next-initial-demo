import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'

export default function Pricing() {
  return (
    <MainLayout>
      <h1>Pricing Page</h1>

      <h3 className='title'>
        Ir a <Link className='custom-link' href='/'>Home</Link>
      </h3>

      <p className='description'>
        Get stated by editing{' '}
        <code className='code'>pages/pricing/index.tsx</code>
      </p>
    </MainLayout>
  )
}
