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
import { Menu } from 'react-feather'
import { Container, Image, LinkContainer, MobileButton, StyledHeader } from './style'

const Header: NextComponentType = () => {
    return (
        <>
            <StyledHeader>
                <Container>
                    <span>
                        <Link href={"/"}>
                            <Image
                                src={"/assets/logo.png"}
                                alt={"Logo"}
                            />
                        </Link>
                    </span>

                    <LinkContainer>
                        <Link href={'/'}>Home</Link>
                        <Link href={'/blog'}>Blog</Link>
                        <Link href={'/work'}>Work</Link>
                        <Link href={'/about'}>About</Link>
                    </LinkContainer>

                    <MobileButton>
                        <button onClick={() => alert("test")}>
                            <Menu size={24} />
                        </button>
                    </MobileButton>
                </Container>
            </StyledHeader>
            {/* <Mobile visible={isMenuOpen} /> */}
        </>
    )
}

export default Header
