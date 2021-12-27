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
import scroll from 'react-scroll'
import { StyledMainHeader, StyledMainLayout, StyledMainSubheader, Container } from './styles'
import { generateEmojiConfig, Emoji } from '../../tools/emoji'

const AboutLayout: NextComponentType = () => {
    let ScrollElement = scroll.Element;
    
    return (
        <ScrollElement name="aboutLayout">
            <StyledMainLayout>
                <div>
                    <StyledMainHeader>
                        About Me
                    </StyledMainHeader>
                    <StyledMainSubheader>$ whoami</StyledMainSubheader>
                </div>
            </StyledMainLayout>
            <Container>
                <p>
                    <Emoji
                        text={'👋'}
                        options={generateEmojiConfig({
                            className: 'emoji',
                        })}
                    />{' '}
                    Hey there, my name is Jamie. You might also know me as "AwesomeTech10," which was my online identity for a few years, before I decided to use my name.
                </p>

                <span style={{ display: "inline-block"}}>
                    <Emoji
                        text={'🏳️‍⚧️'}
                        options={generateEmojiConfig({
                            className: 'emoji',
                        })}
                    />{' '}
                    <a href={"https://en.pronouns.page/@ItsJamie"} style={{ display: 'inline-block' }}>I am a transgirl, and use She/They/It pronouns, although She/Her are preferred.</a>
                </span>
                
                <p>
                    <Emoji
                        text={'🚀'}
                        options={generateEmojiConfig({
                            className: 'emoji',
                        })}
                    />{' '}
                    I'm a teenage computer programmer and developer that designs apps and websites.
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
                {/* This is where I'd add the language thing when I feel like doing that */}

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
                            <a href={"https://tau.innatical.com"}>tauOS</a>
                        </span>
                    </li>
                    <li>
                        <span style={{ display: 'inline-block' }}>
                            <a href={"https://fivnex.co"}>Fivnex</a>
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
                </ul>
            </Container>
        </ScrollElement>
    )
}

export default AboutLayout
