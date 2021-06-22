import React from 'react'
import { Repository as IRepository } from '../../interfaces/IRepository'
import FeatherIcon from 'feather-icons-react'
import {
    Description,
    HeaderContainer,
    HeaderText,
    LanguagePill,
    StarContainer,
    StyledLink,
    StyledRepository,
    TextContainer,
} from './style'
import Link from 'next/link'

export const Repository = ({ repo }: { repo: IRepository }) => {
    return (
        <Link href={repo.html_url}>
            <StyledLink href={repo.html_url}>
                <StyledRepository>
                    <TextContainer>
                        <HeaderContainer>
                            <HeaderText>{repo.name}</HeaderText>
                            {repo.language && (
                                <LanguagePill discontinued={repo.archived}>
                                    {repo.language}
                                </LanguagePill>
                            )}
                        </HeaderContainer>
                        <Description>{repo.description}</Description>
                    </TextContainer>
                    <StarContainer>
                        <FeatherIcon icon={'star'} size={18} />
                        <p>{repo.stargazers_count}</p>
                    </StarContainer>
                </StyledRepository>
            </StyledLink>
        </Link>
    )
}