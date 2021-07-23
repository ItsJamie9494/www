import React from 'react'
import Head from 'next/head'
import crypto from 'crypto'
import { v4 } from 'uuid'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import { Header } from './Header'
import { Footer } from './Footer'

import { Container, GlobalStyle } from './style'
import { lightTheme, darkTheme } from '../theme'
import { useGlobalState } from '../globals'

import config from '../config'
import { AnimatedBackground } from './Animated'
import { useRouter } from 'next/router'

interface PropTypes {
    title: string
    children: any
    isBlogPost?: boolean
    postID?: string
}

const GStyle = createGlobalStyle`${GlobalStyle}`

const generateCSP = () => {
    const productionEnv = process.env.NODE_END === 'production'

    const hash = crypto.createHash('sha256')
    hash.update(v4())
    const nonce = hash.digest('base64')

    let csp = ``
    csp += `base-uri 'self';`
    csp += `script-src 'nonce-${nonce}' 'self' https://analytics.${
        config.hostname
    } https://latest.cactus.chat ${productionEnv ? '' : "'unsafe-eval'"};`
    csp += `connect-src 'self' matrix.cactus.chat:* analytics.${config.hostname}:* gitlab.com:* 'unsafe-eval';`
    //if (!productionEnv) csp += `connect-src 'self';`;

    return [csp, nonce]
}

const Layout = (props: PropTypes) => {
    const [isDarkTheme, setIsDarkTheme] = useGlobalState('isDarkTheme')
    const [csp, nonce] = generateCSP()

    React.useEffect(() => {
        if (window) {
            // @ts-ignore Custom DOM Event
            window.plausible =
                // @ts-ignore Custom DOM Event
                window.plausible ||
                function () {
                    // @ts-ignore Custom DOM Event
                    ;(window.plausible.q = window.plausible.q || []).push(
                        arguments
                    )
                }
        }
    }, [])

    const router = useRouter()
    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <GStyle />
            <Head>
                <title>
                    {props.title} • {config.name}
                </title>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <meta name={'description'} content={config.description} />
                <meta
                    name={'og:title'}
                    content={`${props.title} • ${config.name}`}
                />
                <meta name={'og:description'} content={config.description} />
                <meta name={'og:type'} content={'website'} />
                <meta name={'og:image'} content={'/assets/logo.png'} />
                <meta name={'twitter:card'} content={'summary'} />
                <meta name={'twitter:creator'} content={config.name} />
                <meta
                    name={'twitter:description'}
                    content={config.description}
                />
                <meta
                    name={'twitter:title'}
                    content={`${props.title} • ${config.name}`}
                />
                <meta httpEquiv="Content-Security-Policy" content={csp} />
                <link
                    rel="canonical"
                    href={`${
                        process.env.NODE_ENV === 'production' ? 'https' : 'http'
                    }://${config.hostname}${router.asPath}`}
                />
                {/* Analytics */}
                <script
                    async
                    defer
                    data-domain={config.hostname}
                    src={`https://analytics.${config.hostname}/js/plausible.outbound-links.js`}
                />
                {/* Comment Section */}
                <script
                    type={'text/javascript'}
                    src={'https://latest.cactus.chat/cactus.js'}
                />
                <link
                    rel={'stylesheet'}
                    href={'https://latest.cactus.chat/style.css'}
                    type={'text/css'}
                />
            </Head>
            <AnimatedBackground />
            <Header />
            <Container>{props.children}</Container>
            <Footer />
        </ThemeProvider>
    )
}
export default Layout
