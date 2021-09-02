import React from 'react'
import { useRouter } from 'next/router'
import {
    StyledFooter,
    Container,
    Image,
    RightContainer,
    LinkContainer,
    CopyrightContainer,
    EggToast,
} from './style'
import Link from 'next/link'
import { config } from '../../config'

export const Footer = () => {
    const [devCount, setDevCount] = React.useState(0)
    const [devMsg, setDevMsg] = React.useState('')
    const [showToast, setShowToast] = React.useState(false)

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
        const router = useRouter()
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
            <StyledFooter isBlured={true}>
                <Container>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >
                        <span onClick={() => onIconClick()}>
                            <Image
                                src={'/assets/logo.png'}
                                alt={'Logo'}
                                style={{ borderRadius: '25px' }}
                            />
                        </span>
                        <div style={{ display: 'flex' }}>
                            <Link
                                href={`https://twitter.com/${config.username}`}
                            >
                                <a className={'noHover'}>
                                    <i className={'icon twitter-icon'} />
                                </a>
                            </Link>
                            <span style={{ margin: '10px' }} />
                            <Link href={`https://${config.hostname}/discord`}>
                                <a className={'noHover'}>
                                    <i className={'icon discord-icon'} />
                                </a>
                            </Link>
                            <span style={{ margin: '10px' }} />
                            <Link
                                href={`https://gitlab.com/${config.username}`}
                            >
                                <a className={'noHover'}>
                                    <i className={'icon gitlab-icon'} />
                                </a>
                            </Link>
                        </div>
                    </div>
                    <RightContainer>
                        <LinkContainer>
                            <Link
                                href={`https://gitlab.com/${config.username}/www`}
                            >
                                Source Code
                            </Link>
                            <Link href={'/legal'}>Legal Notices</Link>
                            <Link href={'/contact'}>Contact Me</Link>
                        </LinkContainer>
                        <CopyrightContainer>
                            <p>
                                Copyright {new Date().getFullYear()} Jamie
                                Thalacker. All Rights Reserved
                            </p>
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
