import React from 'react'
import { Repository as IRepository } from '../../interfaces/IRepository'
import FeatherIcon from 'feather-icons-react'
import {
    Description,
    HeaderContainer,
    HeaderText,
    LanguagePill,
    StarContainer,
    StyledRepository,
    TextContainer,
} from './style'

export const Repository = ({ repo }: { repo: IRepository }) => {
    return (
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
    )
}
