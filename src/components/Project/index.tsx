import React from 'react'
import Link from 'next/link'
import {
    StyledProject,
    ProjectName,
    ProjectDescription,
    ProjectImage,
    DiscontinuedPill,
    LanguagePill,
    Container,
    Header,
    NameContainer,
} from './style'
import { HeroButton } from '../Button'

export const Project = ({
    name,
    language,
    discontinued,
    repo,
    description,
    image,
    link,
    gh,
}: {
    repo: string
    name: string
    language: string
    discontinued?: boolean
    description: string
    image: string
    link: string
    gh?: boolean
}) => {
    return (
        <Link href={link}>
            <a className={'noHover'}>
                <StyledProject>
                    <ProjectImage src={image} />
                    <Container>
                        <Header>
                            <NameContainer>
                                <ProjectName>{name}</ProjectName>
                                {language && (
                                    <LanguagePill>{language}</LanguagePill>
                                )}
                                {discontinued && (
                                    <DiscontinuedPill>
                                        Discontinued
                                    </DiscontinuedPill>
                                )}
                            </NameContainer>
                            <Link
                                href={`https://${
                                    gh ? 'github' : 'gitlab'
                                }.com/${repo}`}
                            >
                                <a className={'noHover'}>
                                    <HeroButton noBG>
                                        <i
                                            className={`icon ${
                                                gh ? 'github' : 'gitlab'
                                            }-icon`}
                                        />{' '}
                                        View on {gh ? 'GitHub' : 'Gitlab'}
                                    </HeroButton>
                                </a>
                            </Link>
                        </Header>
                        <ProjectDescription>{description}</ProjectDescription>
                    </Container>
                </StyledProject>
            </a>
        </Link>
    )
}
