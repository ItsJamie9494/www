import React from 'react';

import { CenteredElement, ContactGrid, ContactSocialLink } from '../Page'
import { Head } from '../Landing'
import Link from 'next/link'
import config from "../../config"

export const ContactPage = () => {
    return (
        <>
            <CenteredElement>
                <Head>Contact Me</Head>
            </CenteredElement>
            <p>I'm not that hard to contact, luckily. It's mostly just a question of where to contact me.</p>

            <p>Do you have an issue or question relating to <span style={{ display: 'inline-block' }}>
                <Link href={"https://dothq.co"}>Dot HQ or Dot Browser</Link></span>?
                I have a Dot HQ email address, <span style={{ display: 'inline-block' }}>
                <Link href={"mailto:trevor@dothq.co"}>trevor@dothq.co</Link></span>, or
                you could just submit feedback through Dot Browser. Which would probably be a better idea.</p>

            <p>If it's a personal project, please post an issue on <span style={{ display: 'inline-block' }}>
                <Link href={"https://github.com/trevorthalacker"}>Github</Link></span> about it, and if it's
                still maintained, I'll try and help you out.</p>

            <p>I am available on a lot of social media services. The full list is as follows:</p>

            <ContactGrid>
                <span style={{ display: 'flex', justifyContent: 'center', width: 'fit-content' }}>
                    <span style={{ display: 'inline-block' }}>
                        <Link href={"https://twitter.com/trevorthalacker"}>
                            <a>
                                <ContactSocialLink>
                                    <i className={'icon twitter-icon'} />
                                    Twitter
                                </ContactSocialLink>
                            </a>
                        </Link>
                    </span>
                </span>
                <span style={{ display: 'flex', justifyContent: 'center', width: 'fit-content' }}>
                    <span style={{ display: 'inline-block' }}>
                        <Link href={"https://reddit.com/u/IAmAwesomeTech10"}>
                            <a>
                                <ContactSocialLink>
                                    <i className={'icon reddit-icon'} />
                                    Reddit
                                </ContactSocialLink>
                            </a>
                        </Link>
                    </span>
                </span>
                <span style={{ display: 'flex', justifyContent: 'center', width: 'fit-content' }}>
                    <span style={{ display: 'inline-block' }}>
                        <Link href={`${config.hostname}/discord`}>
                            <a>
                                <ContactSocialLink>
                                    <i className={'icon discord-icon'} />
                                    Discord
                                </ContactSocialLink>
                            </a>
                        </Link>
                    </span>
                </span>
                <span style={{ display: 'flex', justifyContent: 'center', width: 'fit-content' }}>
                    <span style={{ display: 'inline-block' }}>
                        <Link href={"https://github.com/trevorthalacker"}>
                            <a>
                                <ContactSocialLink>
                                    <i className={'icon github-icon'} />
                                    Github
                                </ContactSocialLink>
                            </a>
                        </Link>
                    </span>
                </span>
                <span style={{ display: 'flex', justifyContent: 'center', width: 'fit-content' }}>
                    <span style={{ display: 'inline-block' }}>
                        <Link href={"https://mastodon.online/@trevorthalacker"}>
                            <a>
                                <ContactSocialLink>
                                    <i className={'icon mastodon-icon'} />
                                    Mastodon
                                </ContactSocialLink>
                            </a>
                        </Link>
                    </span>
                </span>
            </ContactGrid>

            <h2>Email</h2>

            <p>You could just email me, through this domain. I have a catch-all setup, so any email sent to
                @{config.hostname} will probably make it to me. For best results, please try and email me
                at <span style={{ display: 'inline-block' }}>
                    <Link href={"mailto:hello@trevorthalacker.com"}><a>hello@{config.hostname}</a></Link>
                </span>.
            </p>
        </>
    )
}