/* components/Layout.tsx
 *
 * Copyright 2021 Jamie Thalacker
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import { Global } from '@emotion/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import type { ReactNode } from 'react'
import { AnimatedBackground } from './Animated'
import { Footer } from './Footer'
import Header from './Header'
import { Container, GlobalStyle } from './style'

const Layout = ({
    children,
    title,
}: {
    children?: ReactNode
    title: string
}) => {
    const router = useRouter()

    return (
        <>
            <Global styles={GlobalStyle} />
            <Head>
                <title>{title} • Jamie Thalacker</title>
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
                <meta
                    name={'description'}
                    content={
                        "I'm a programmer that works on open-source projects"
                    }
                />
                <meta
                    name={'og:title'}
                    content={`${title} • Jamie Thalacker`}
                />
                <meta
                    name={'og:description'}
                    content={
                        "I'm a programmer that works on open-source projects"
                    }
                />
                <meta name={'og:type'} content={'website'} />
                <meta name={'og:image'} content={'/assets/logo.png'} />
                <meta name={'twitter:card'} content={'summary'} />
                <meta name={'twitter:creator'} content={'@ItsJamie9494'} />
                <meta
                    name={'twitter:description'}
                    content={
                        "I'm a programmer that works on open-source projects"
                    }
                />
                <meta
                    name={'twitter:title'}
                    content={`${title} • Jamie Thalacker`}
                />
                <link
                    rel="canonical"
                    href={`${
                        process.env.NODE_ENV === 'production' ? 'https' : 'http'
                    }://jamiethalacker.dev${router.asPath}`}
                />
            </Head>
            <AnimatedBackground />
            <Header />
            <Container>{children}</Container>
            <Footer />
        </>
    )
}

export default Layout
