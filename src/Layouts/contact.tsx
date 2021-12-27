/* components/Layouts/contact.tsx
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
import Link from 'next/link'
import scroll from 'react-scroll'
import { TextButton } from '../components/TextButton'
import { scroller } from '../pages/_app'
import { Emoji, generateEmojiConfig } from '../tools/emoji'
import {
    ContactGrid,
    ContactSocialLink,
    Container,
    StyledMainHeader,
    StyledWorkLayout,
} from './styles'

interface SocialMedia {
    link: string
    icon: string
    name: string
}

const SocialMediaGrid = ({ items }: { items: Array<SocialMedia> }) => {
    return (
        <ContactGrid>
            {items.map((gridItem) => (
                <span style={{ width: 'fit-content', display: 'flex' }}>
                    <span
                        style={{
                            display: 'inline-flex',
                            margin: 'auto',
                        }}
                    >
                        <Link href={gridItem.link}>
                            <a>
                                <ContactSocialLink>
                                    <i className={`icon ${gridItem.icon}`} />
                                    {gridItem.name}
                                </ContactSocialLink>
                            </a>
                        </Link>
                    </span>
                </span>
            ))}
        </ContactGrid>
    )
}

const ContactLayout: NextComponentType = () => {
    let ScrollElement = scroll.Element

    return (
        <ScrollElement name="contactLayout">
            <StyledWorkLayout>
                <div>
                    <StyledMainHeader>Get in Touch</StyledMainHeader>
                </div>
            </StyledWorkLayout>
            <Container>
                <p>
                    <Emoji
                        text={'💬'}
                        options={generateEmojiConfig({
                            className: 'emoji',
                        })}
                    />{' '}
                    If you have any questions, concerns, or just want to chat,
                    feel free to contact me!
                </p>
                <ul>
                    <li>
                        Do you have an issue or question relating to{' '}
                        <span style={{ display: 'inline-block' }}>
                            <a href={'https://tau.innatical.com'}>tauOS</a>
                        </span>
                        ? Please contact Innatical at{' '}
                        <span style={{ display: 'inline-block' }}>
                            <a href={'mailto:contact@innatical.com'}>
                                contact@innatical.com
                            </a>
                        </span>
                        .
                    </li>
                    <li>
                        Do you have an issue or question relating to{' '}
                        <span style={{ display: 'inline-block' }}>
                            <a href={'https://fivnex.co'}>Fivnex</a>
                        </span>
                        ? Please contact Fivnex at{' '}
                        <span style={{ display: 'inline-block' }}>
                            <a href={'mailto:support@fivnex.co'}>
                                support@fivnex.co
                            </a>
                        </span>
                        .
                    </li>
                    <li>
                        If you have an issue with a personal project, please
                        post an issue on{' '}
                        <span style={{ display: 'inline-block' }}>
                            <a href={'https://github.com/ItsJamie9494'}>
                                GitHub
                            </a>
                        </span>
                        .
                    </li>
                </ul>

                <h3>
                    <Emoji
                        text={'📱'}
                        options={generateEmojiConfig({
                            className: 'emoji',
                        })}
                    />{' '}
                    My Social Media
                </h3>

                <SocialMediaGrid
                    items={[
                        {
                            name: 'Twitter',
                            link: 'https://twitter.com/ItsJamie9494',
                            icon: 'twitter-icon',
                        },
                        {
                            name: 'Reddit',
                            link: 'https://reddit.com/u/IAmAwesomeTech10',
                            icon: 'reddit-icon',
                        },
                        {
                            name: 'Discord',
                            link: 'https://discord.gg/RCrf6ZtvKB',
                            icon: 'discord-icon',
                        },
                        {
                            name: 'GitHub',
                            link: 'https://github.com/ItsJamie9494',
                            icon: 'github-icon',
                        },
                        {
                            name: 'Polywork',
                            link: 'https://www.polywork.com/itsjamie9494',
                            icon: 'polywork-icon',
                        },
                        {
                            name: 'Mastodon',
                            link: 'https://mastodon.online/@jamiethalacker',
                            icon: 'mastodon-icon',
                        },
                    ]}
                />

                <h3>
                    <Emoji
                        text={'📫'}
                        options={generateEmojiConfig({
                            className: 'emoji',
                        })}
                    />{' '}
                    Email Me
                </h3>

                <p>
                    Not a social media person? You can email me through this
                    domain. I have a catch-all setup, so any email sent to
                    @jamiethalacker.dev will probably make it to me, but for
                    best results, please try and email me at{' '}
                    <span style={{ display: 'inline-block' }}>
                        <Link href={`mailto:hello@jamiethalacker.dev`}>
                            <a>hello@jamiethalacker.dev</a>
                        </Link>
                    </span>
                    .
                </p>
            </Container>
        </ScrollElement>
    )
}

export default ContactLayout
