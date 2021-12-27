/* components/Project/index.tsx
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

import React from 'react'
import Link from 'next/link'
import {
    StyledProject,
    ProjectName,
    ProjectDescription,
    ProjectLink,
    ProjectImage,
} from './style'
import { LanguagePill } from '../Repository/style'
import { GetLanguageColour } from '../../lib/colours'

export const Project = ({
    header,
    projectDescription,
    link,
    repo,
    image,
    noRepo,
    language,
}: {
    header: string
    projectDescription: string
    link: string
    repo?: string
    image: string
    noRepo?: boolean
    discontinued?: boolean
    language?: string
}) => {

    const [languageColour, setLanguage] = React.useState("")

    React.useEffect(() => {
        const doThing = async (language: string) => await GetLanguageColour(language)

        if (language) {
            doThing(language).then(res => setLanguage(res))
        }
    }, [])

    return (
        <StyledProject>
            <ProjectImage src={image} />
            <ProjectName>
                {header}
                {/* {discontinued && (
                    <DiscontinuedPill>Discontinued</DiscontinuedPill>
                )} */}
                {language && (
                    <>
                        <span style={{ margin: '.5rem' }} />
                        <LanguagePill discontinued={false} colour={languageColour}>
                            {language}
                        </LanguagePill>
                    </>
                )}
                
            </ProjectName>
            <ProjectDescription>{projectDescription}</ProjectDescription>
            <div
                style={{
                    display: 'grid',
                    gridAutoFlow: 'column',
                    gap: '30px',
                    margin: '0 auto',
                }}
            >
                <ProjectLink>
                    <Link href={link}>Visit Website</Link>
                </ProjectLink>
                {!noRepo && repo && (
                    <ProjectLink>
                        <Link href={`https://github.com/${repo}`}>
                            <a>
                                <span
                                    style={{
                                        display: 'flex',
                                        marginLeft: -10,
                                    }}>
                                    <i className={'icon github-icon'} /> View on Github
                                </span>
                            </a>
                        </Link>
                    </ProjectLink>
                )}
            </div>
        </StyledProject>
    )
}