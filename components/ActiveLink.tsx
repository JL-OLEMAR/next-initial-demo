import type { CSSProperties } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

interface Props {
  text: string
  href: string
}

const style: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline'
}

export function ActiveLink({ text, href }: Props) {
  const { asPath } = useRouter()

  return (
    <Link
      style={asPath === href ? style : undefined}
      href={href}
    >
      {text}
    </Link>
  )
}
