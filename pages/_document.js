import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
<Head>

</Head>
      <body>
        <Main />
        <NextScript />
      </body>
      <script type="text/javascript" dangerouslySetInnerHTML={{ __html: process.env.rawJsFromFile }}></script>
    </Html>
  )
}
