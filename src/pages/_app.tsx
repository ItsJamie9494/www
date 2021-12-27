import type { AppProps } from 'next/app'
import '../style/globals.css'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App
