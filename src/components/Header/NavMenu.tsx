import React from 'react'
import Link from "next/link"
import FeatherIcon from 'feather-icons-react'
import cookies from 'react-cookies'
import { MobileContainer, MobileLink, MobileLinkContainer } from "./style"
import { useGlobalState } from "../../globals"
import {IconButton} from "../Button";

// This navigation menu should only appear on devices with a really small screen
export const NavMenu = ({ isVisible }: { isVisible: boolean }) => {
    const [ isDarkTheme, setIsDarkTheme ] = useGlobalState('isDarkTheme')

    const darkThemeCookie = cookies.load('darkTheme')
    const expires = new Date()
    expires.setDate(Date.now() + 1000 * 60 * 60 * 24 * 14)

    return (
        <MobileContainer isVisible={isVisible}>
            <MobileLinkContainer>
                <Link href={"/"}>
                    <a className={"noHover"}>
                        <MobileLink>
                            Home
                        </MobileLink>
                    </a>
                </Link>
                <Link href={"/blog"}>
                    <a className={"noHover"}>
                        <MobileLink>
                            Blog
                        </MobileLink>
                    </a>
                </Link>
                <Link href={"/work"}>
                    <a className={"noHover"}>
                        <MobileLink>
                            Work
                        </MobileLink>
                    </a>
                </Link>
                <Link href={"/about"}>
                    <a className={"noHover"}>
                        <MobileLink>
                            About
                        </MobileLink>
                    </a>
                </Link>
            </MobileLinkContainer>
            <MobileLink onClick={() => {
                setIsDarkTheme(!isDarkTheme);
                cookies.save(
                    'darkTheme',
                    !isDarkTheme,
                    { expires }
                );
            }}>
                <IconButton>
                    <FeatherIcon
                        icon={isDarkTheme ? 'sun' : 'moon'}
                        size={18} />
                </IconButton>
                <p>{isDarkTheme ? 'Dark' : 'Light'} Theme</p>
            </MobileLink>
        </MobileContainer>
    )
}
