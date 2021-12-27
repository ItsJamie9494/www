import type { AppProps } from 'next/app'
import '../style/globals.css'
import scroll from 'react-scroll'

export const scroller = scroll.scroller

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App
