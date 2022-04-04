/* components/Layouts/about.tsx
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
import React from 'react'
import scroll from 'react-scroll'
import { AboutFamiliarList } from '../components/AboutFamiliarList'
import { Emoji, generateEmojiConfig } from '../tools/emoji'
import {
    Container,
    StyledMainHeader,
    StyledMainSubheader,
    StyledWorkLayout
} from './styles'

const AboutLayout: NextComponentType = () => {
    let ScrollElement = scroll.Element
    const [superSneakyElement, setSuperSneakyElement] = React.useState(false)

    return (
        <ScrollElement name="aboutLayout">
            <StyledWorkLayout>
                <div>
                    <StyledMainHeader>About Me</StyledMainHeader>
                    <StyledMainSubheader>$ whoami</StyledMainSubheader>
                </div>
            </StyledWorkLayout>
            <Container>
                <p>
                    <Emoji
                        text={'👋'}
                        options={generateEmojiConfig({
                            className: 'emoji',
                        })}
                    />{' '}
                    Hey there, my name is Jamie.
                </p>

                <span style={{ display: 'inline-block' }}>
                    <Emoji
                        text={'🏳️‍⚧️'}
                        options={generateEmojiConfig({
                            className: 'emoji',
                        })}
                    />{' '}
                    <a
                        href={'https://en.pronouns.page/@ItsJamie'}
                        style={{ display: 'inline-block' }}
                    >
                        I am a transgirl, and use She/They/It pronouns, although
                        She/Her are preferred.
                    </a>
                </span>

                <p>
                    <Emoji
                        text={'🚀'}
                        options={generateEmojiConfig({
                            className: 'emoji',
                        })}
                    />{' '}
                    I'm a teenage computer programmer and developer that designs
                    apps and websites.
                </p>

                <h2>More Information</h2>

                <h3>
                    <Emoji
                        text={'🌟'}
                        options={generateEmojiConfig({
                            className: 'emoji',
                        })}
                    />{' '}
                    I'm familiar with
                </h3>

                <AboutFamiliarList />

                <h3>
                    <Emoji
                        text={'🔭'}
                        options={generateEmojiConfig({
                            className: 'emoji',
                        })}
                    />{' '}
                    I'm currently working on
                </h3>
                <ul>
                    <li>
                        <span style={{ display: 'inline-block' }}>
                            <a href={'https://tauos.co'}>tauOS</a>
                        </span>
                    </li>
                </ul>

                <h3>
                    <Emoji
                        text={'🌱'}
                        options={generateEmojiConfig({
                            className: 'emoji',
                        })}
                    />{' '}
                    I'm currently learning
                </h3>
                <ul>
                    <li>TypeScript</li>
                    <li>Rust</li>
                    <li>GTK4</li>
                    <li>LibAdwaita</li>
                    <li>Vala</li>
                </ul>

                <h3>
                    <Emoji
                        text={'⚡'}
                        options={generateEmojiConfig({
                            className: 'emoji',
                        })}
                    />{' '}
                    Fun Facts
                </h3>
                <ul>
                    <li>My favourite kernel is Linux</li>
                    <li>My favourite Linux DE is GNOME</li>
                    <li>
                        I love Easter Eggs and try and include them in every
                        project. Including{' '}
                        <b
                            onClick={() => {
                                setSuperSneakyElement(true)
                            }}
                        >
                            this site!
                        </b>
                    </li>
                    {superSneakyElement && (
                        <li>Try the Konami Code and see what that does.</li>
                    )}
                </ul>
            </Container>
        </ScrollElement>
    )
}

export default AboutLayout
