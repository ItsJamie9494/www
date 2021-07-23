import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import FeatherIcon from 'feather-icons-react'
import cookies from 'react-cookies'
import {
    StyledHeader,
    Container,
    Image,
    LinkContainer,
    Dropdown,
    DesktopButton,
} from './style'
import { IconButton } from '../Button'

import { useGlobalState } from '../../globals'
import { NavMenu } from './NavMenu'

export const Header = () => {
    const [isBlurred, setBlurred] = React.useState(false)
    const [isDarkTheme, setIsDarkTheme] = useGlobalState('isDarkTheme')
    const [keys, setKeys] = React.useState([])
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const [isScript, setIsScript] = React.useState(false)

    const router = useRouter()
    const darkThemeCookie = cookies.load('darkTheme')
    const expires = new Date()
    expires.setDate(Date.now() + 1000 * 60 * 60 * 24 * 14)

    const changeTheme = () => {
        let theme = !isDarkTheme
        setIsDarkTheme(theme)

        cookies.save('darkTheme', theme, { expires })

        // because it's hard to mess with the body
        if (document) {
            document.querySelector('html').classList.value = theme
                ? 'darkTheme'
                : 'lightTheme'
        }
    }

    React.useEffect(() => {
        if (darkThemeCookie === 'true') {
            setIsDarkTheme(true)
        } else {
            setIsDarkTheme(false)
        }

        if (keys.join('') === 'uuddlrlrbae') {
            router.push('/snek')
            setKeys([])
        }

        const downHandler = (e) => {
            let key = null
            if (e.code === 'ArrowUp') key = 'u'
            if (e.code === 'ArrowDown') key = 'd'
            if (e.code === 'ArrowLeft') key = 'l'
            if (e.code === 'ArrowRight') key = 'r'
            if (e.code === 'KeyA') key = 'a'
            if (e.code === 'KeyB') key = 'b'
            if (e.code === 'Enter') key = 'e'

            if (key) {
                setKeys((keyState) =>
                    keyState.length >= 11
                        ? keyState.concat(key).slice(1, 12)
                        : keyState.concat(key)
                )
            } else {
                setKeys([])
            }
        }

        setIsScript(true)

        window.addEventListener('keydown', downHandler, { passive: true })

        // header blur
        window.onscroll = function () {
            if (window.scrollY <= 25) {
                setBlurred(false)
            } else {
                setBlurred(true)
            }
        }

        return () => {
            window.removeEventListener('keydown', downHandler)
        }
    })
    return (
        <>
            <StyledHeader isBlurred={isBlurred}>
                <Container>
                    <div>
                        <Link href={'/'}>
                            <Image
                                src={'/assets/logo.png'}
                                alt={'Logo'}
                                style={{ borderRadius: '25px' }}
                            />
                        </Link>
                    </div>

                    {/* Shown if screen is larger than 660px */}
                    <LinkContainer>
                        <Link href={'/'}>Home</Link>
                        <Link href={'/blog'}>Blog</Link>
                        <Link href={'/work'}>Work</Link>
                        <Link href={'/about'}>About</Link>
                    </LinkContainer>
                    {isScript && (
                        <DesktopButton>
                            <IconButton>
                                <FeatherIcon
                                    icon={isDarkTheme ? 'sun' : 'moon'}
                                    onClick={() => changeTheme()}
                                    size={18}
                                />
                            </IconButton>
                        </DesktopButton>
                    )}
                    {/* Import the Nav Menu, for smaller screens */}
                    <Dropdown>
                        <IconButton>
                            <FeatherIcon
                                icon={'menu'}
                                size={18}
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            />
                        </IconButton>
                    </Dropdown>
                </Container>
            </StyledHeader>
            <NavMenu isVisible={isMenuOpen} />
        </>
    )
}
