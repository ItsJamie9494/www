/* components/Footer/index.tsx
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

import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import {
    Container,
    CopyrightContainer,
    EggToast,
    Image,
    RightContainer,
    StyledFooter,
} from './style'

export const Footer = () => {
    const [devCount, setDevCount] = React.useState(0)
    const [devMsg, setDevMsg] = React.useState('')
    const [showToast, setShowToast] = React.useState(false)
    const router = useRouter()

    const onIconClick = () => {
        if (devCount >= 4) {
            if (showToast === true) {
                null
            } else {
                setShowToast(true)
                setTimeout(() => {
                    setShowToast(false)
                }, 4000)
            }
        }
        setDevCount(devCount + 1)
    }

    if (devCount === 12) {
        router.push('/archive')
    }

    React.useEffect(() => {
        if (devCount >= 5) {
            setDevMsg(
                `You are ${10 - devCount} steps away from being a developer`
            )
        }

        if (devCount === 10) {
            setDevMsg(`You are now a developer!`)
        }

        if (devCount > 10) {
            setDevMsg(`No need, you are already a developer`)
        }
    })

    return (
        <>
            <StyledFooter>
                <Container>
                    <Image
                        src={'/assets/logo.jpg'}
                        alt={'Logo'}
                        style={{ borderRadius: '25px' }}
                        onClick={() => onIconClick()}
                    />
                    <RightContainer>
                        <Link href={`https://github.com/ItsJamie9494/www`}>
                            <a>Source Code</a>
                        </Link>

                        <CopyrightContainer>
                            Copyright {new Date().getFullYear()} Jamie
                            Thalacker. All Rights Reserved
                        </CopyrightContainer>
                    </RightContainer>
                </Container>
                {devCount >= 5 && showToast && <EggToast>{devMsg}</EggToast>}
                <noscript>
                    <EggToast>
                        Please enable Javascript for the best experience
                    </EggToast>
                </noscript>
            </StyledFooter>
        </>
    )
}
