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
}: {
    repo: string
    name: string
    language: string
    discontinued?: boolean
    description: string
    image: string
}) => {
    return (
        <StyledProject>
            <ProjectImage src={image} />
            <Container>
                <Header>
                    <NameContainer>
                        <ProjectName>{name}</ProjectName>
                        {language && <LanguagePill>{language}</LanguagePill>}
                        {discontinued && (
                            <DiscontinuedPill>Discontinued</DiscontinuedPill>
                        )}
                    </NameContainer>
                    <Link href={`https://github.com/${repo}`}>
                        <a className={'noHover'}>
                            <HeroButton noBG>
                                <i className={'icon github-icon'} /> View on
                                GitHub
                            </HeroButton>
                        </a>
                    </Link>
                </Header>
                <ProjectDescription>{description}</ProjectDescription>
            </Container>
        </StyledProject>
    )
}
