import React from "react"
import Head from "next/head";
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import { Header } from "./Header"
import { Footer } from "./Footer"

import { Container, GlobalStyle } from "./style"
import { lightTheme, darkTheme } from '../theme'
import { useGlobalState } from '../globals'

import config from '../config'

interface PropTypes {
    title: string;
    children: any;
    isBlogPost?: boolean;
    postID?: string;
}

const GStyle = createGlobalStyle`${GlobalStyle}`

const Layout = (props: PropTypes) => {
    const [isDarkTheme, setIsDarkTheme] = useGlobalState('isDarkTheme')

    React.useEffect(() => {
        if (window) {
            window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }
        }
    }, [])
    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <GStyle />
            <Head>
                <title>{props.title} | Trevor Thalacker</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <meta name={"description"} content={config.description} />
                <meta name={"og:title"} content={`${props.title} | Trevor Thalacker`} />
                <meta name={"og:description"} content={config.description} />
                <meta name={"og:type"} content={"website"} />
                <meta name={"og:image"} content={"/assets/logo.png"} />
                <meta name={"twitter:card"} content={"summary"} />
                <meta name={"twitter:creator"} content={"Trevor Thalacker"} />
                <meta name={"twitter:description"} content={config.description} />
                <meta name={"twitter:title"} content={`${props.title} | Trevor Thalacker`} />
                {/* Analytics */}
                <script async defer data-domain={"trevorthalacker.com"} src={"https://analytics.trevorthalacker.com/js/plausible.js"} />
                {/* Comment Section */}
                <script type={"text/javascript"} src={"https://latest.cactus.chat/cactus.js"} />
                <link rel={"stylesheet"} href={"https://latest.cactus.chat/style.css"} type={"text/css"} />
                {/* :) */}
                <script type={"text/javascript"} src={"/console.js"} />
            </Head>
            <Header/>
            <Container>
                {props.children}
            </Container>
            <Footer />
        </ThemeProvider>
    )
}
export default Layout
