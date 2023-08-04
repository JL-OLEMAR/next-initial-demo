import { Children } from 'react'
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import type { NextPageContext } from 'next'
import { CssBaseline } from '@nextui-org/react'

MyDocument.getInitialProps = async (ctx: NextPageContext) => {
  const initialProps = await Document.getInitialProps(ctx as DocumentContext)
  return {
    ...initialProps,
    styles: Children.toArray([initialProps.styles])
  }
}

export default function MyDocument() {
  return (
    <Html lang='es'>
      <Head>{CssBaseline.flush()}</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
