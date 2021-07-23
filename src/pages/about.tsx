import React from 'react'
import Layout from '../components/Layout'
import { Head, Landing, Subheader } from '../components/Landing'
import { Container } from '../components/Page'
import Typist from 'react-typist'
import Emoji from 'react-emoji-render'
import { generateEmojiConfig } from '../tools/emoji'
import Link from 'next/link'
import { AboutFamiliar } from '../components/AboutFamiliar'

const About = () => {
    return (
        <>
            <Layout title={'About'}>
                <Landing>
                    <Head>About Me</Head>
                    <Typist
                        cursor={{
                            show: false,
                        }}
                        avgTypingDelay={100}
                    >
                        <Subheader>$ whoami</Subheader>
                    </Typist>
                </Landing>
                <Container>
                    <p>
                        <Emoji
                            text={'👋'}
                            options={generateEmojiConfig({
                                className: 'emoji',
                            })}
                        />{' '}
                        Hey there,{' '}
                        <span onClick={() => window.location.replace('/maybe')}>
                            my name is Trevor Thalacker.
                        </span>{' '}
                        You might also know me as "AwesomeTech10," which was my
                        online identity for a few years, before I decided to use
                        my name.
                    </p>
                    <p>
                        I am a teenage computer programmer that develops
                        websites and apps.
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

                    {/* Seperate component because this is absolutely huge list */}
                    <AboutFamiliar />

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
                                <Link href={'https://dothq.co'}>
                                    Dot Browser
                                </Link>
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
                        <li>Dart</li>
                        <li>Rust</li>
                        <li>Kotlin</li>
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
                        <li>
                            I am a major fan of privacy, and usually try and use
                            as many privacy-focused alternatives as possible.
                        </li>
                    </ul>
                    {/* <p>
                        I mostly program websites, using Typescript, and React
                        (fun fact: this entire website is written with React and
                        Next.js). I can do CSS as well. I also develop a few
                        applications, most notably the Dot Browser.
                    </p>

                    <p>
                        I'm trying to learn more programming languages, such as
                        Rust and Python.
                    </p>

                    <p>
                        I am a major fan of privacy, and usually try and use as
                        many privacy-focused alternatives as possible.
                    </p> */}
                </Container>
            </Layout>
        </>
    )
}

export default About
