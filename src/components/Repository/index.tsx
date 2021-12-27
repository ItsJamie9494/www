/* components/Repository/index.tsx
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

import Link from "next/link"
import React from "react"
import { Star } from "react-feather"
import { Repository } from "../../interfaces/Repository"
import { StyledLink, StyledRepository, TextContainer, HeaderContainer, HeaderText, LanguagePill, Description, StarContainer } from "./style"

const Repository = ({ repo }: { repo: Repository }) => {

    return (
        <Link href={repo.html_url}>
            <StyledLink href={repo.html_url}>
                <StyledRepository>
                    <TextContainer discontinued={repo.archived}>
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
                        <Star size={18} />
                        <p>{repo.stargazers_count}</p>
                    </StarContainer>
                </StyledRepository>
            </StyledLink>
        </Link>
    )
}

export default Repository