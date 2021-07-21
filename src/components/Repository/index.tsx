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
        <Link href={'https://example.com'}>
            <StyledLink href={repo.web_url}>
                <StyledRepository>
                    <TextContainer>
                        <HeaderContainer>
                            <HeaderText>{repo.name}</HeaderText>
                            {/* {repo.language && (
                                <LanguagePill discontinued={repo.archived}>
                                    {repo.language}
                                </LanguagePill>
                            )} */}
                            {/* I don't care enough to spam API requests to get the language */}
                            {repo.archived && (
                                <LanguagePill discontinued={repo.archived}>
                                    Archived
                                </LanguagePill>
                            )}
                        </HeaderContainer>
                        <Description>{repo.description}</Description>
                    </TextContainer>
                    <StarContainer>
                        <FeatherIcon icon={'star'} size={18} />
                        <p>{repo.star_count}</p>
                    </StarContainer>
                </StyledRepository>
            </StyledLink>
        </Link>
    )
}
