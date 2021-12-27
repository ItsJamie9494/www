/* components/Header/index.tsx
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

import type { NextComponentType } from 'next'
import Link from 'next/link'
import React from 'react'
import { Menu } from 'react-feather'
import scroll from 'react-scroll'
import { scroller } from '../../pages/_app'
import Mobile from './mobile'
import {
    Container,
    Image,
    LinkContainer,
    MobileButton,
    StyledHeader,
} from './style'

export const HeaderLinks: NextComponentType = () => {
    const localScroller = scroll.animateScroll
    return (
        <>
            <a
                href={'/#'}
                onClick={() =>
                    localScroller.scrollToTop({
                        duration: 500,
                        smooth: true,
                    })
                }
            >
                Home
            </a>
            <a
                href={'/#workLayout'}
                onClick={() =>
                    scroller.scrollTo('workLayout', {
                        duration: 500,
                        smooth: true,
                    })
                }
            >
                Work
            </a>
            <a
                href={'/#aboutLayout'}
                onClick={() =>
                    scroller.scrollTo('aboutLayout', {
                        duration: 500,
                        smooth: true,
                    })
                }
            >
                About
            </a>
            <a
                href={'/#contactLayout'}
                onClick={() =>
                    scroller.scrollTo('contactLayout', {
                        duration: 500,
                        smooth: true,
                    })
                }
            >
                Get in Touch
            </a>
        </>
    )
}

const Header: NextComponentType = () => {
    const [isMenuOpen, setMenuOpen] = React.useState(false)
    const [isBlurred, setBlurred] = React.useState(false)

    React.useEffect(() => {
        // header blur
        window.onscroll = function () {
            if (window.scrollY <= 25) {
                setBlurred(false)
            } else {
                setBlurred(true)
            }
        }
    })

    return (
        <>
            <StyledHeader isBlurred={isBlurred}>
                <Container>
                    <span>
                        <Link href={'/'}>
                            <Image src={'/assets/logo.jpg'} alt={'Logo'} />
                        </Link>
                    </span>

                    <LinkContainer>
                        <HeaderLinks />
                    </LinkContainer>

                    <MobileButton>
                        <button onClick={() => setMenuOpen(!isMenuOpen)}>
                            <Menu size={24} />
                        </button>
                    </MobileButton>
                </Container>
            </StyledHeader>
            <Mobile visible={isMenuOpen} />
        </>
    )
}

export default Header
