import React from 'react'
import Layout from "../components/Layout"
import { Head, Landing, Subheader } from "../components/Landing"
import config from "../config"
import Typist from 'react-typist'
import { Project } from "../components/Project"
import { Container, CenteredElement, ContactGrid, ContactSocialLink } from "../components/Page"
import Link from 'next/link';

const Index = () => {
  return (
      <>
        <Layout title={'Home'}>
            <Landing>
                <div style={{ flexDirection: 'row' }}>
                    <Typist
                        cursor={{
                            show: false
                        }}>
                        <Head>Hi, I'm <b>{config.name}</b></Head>
                        <br />
                        <Subheader>{config.description}</Subheader>
                    </Typist>
                </div>
            </Landing>
            <Container>
                    <CenteredElement>
                        <Head>My Work</Head>
                        <p>This is a comprehensive list of all projects that I have worked on, as well as organizations I've worked with</p>
                    </CenteredElement>
                    <Project
                        header={"Developer"}
                        projectName={"Dot Browser"}
                        projectDescription={"Dot Browser is a privacy-conscious web browser with smarts built-in for protection against trackers and advertisements online."}
                        projectWebsite={"https://dothq.co"}
                        projectImage={"/assets/projects/dotbrowser.png"}
                        projectRepository={"https://github.com/dothq"} />
                    <Project
                        header={"Lead Developer"}
                        projectName={"keyboardnotfound.com"}
                        projectDescription={"keyboardnotfound.com is a joke website, that shows the famous \"Keyboard not found, Press F1 to continue\" message."}
                        projectWebsite={"https://keyboardnotfound.com"}
                        projectImage={"/assets/projects/keyboardnotfound.png"}
                        projectRepository={"https://github.com/trevorthalacker/keyboardnotfound"} />
                    <Project
                        header={"Lead Developer"}
                        projectName={"bingus.link"}
                        projectDescription={"A free, private URL shortener with the greatest domain in existence."}
                        projectWebsite={"https://bingus.link"}
                        projectImage={"/assets/projects/binguslink.png"}
                        projectRepository={"https://github.com/trevorthalacker/bingus.link"} />
                    <CenteredElement>
                        <p>And hopefully more to come in the future!</p>
                    </CenteredElement>
                    <CenteredElement>
                        <Head>About Me</Head>
                        <Typist
                            cursor={{
                                show: false
                            }}
                            avgTypingDelay={100}>
                            <Subheader>$ whoami</Subheader>
                        </Typist>
                    </CenteredElement>
                    <p>Hey there, <span onClick={() => window.location.replace('/maybe')}>my name</span> is Trevor
                        Thalacker. You might also know me as "AwesomeTech10," which was my online identity for a few
                        years, before I decided to use my name. I program stuff, usually website stuff.</p>

                    <h2>More Information</h2>

                    <p>I mostly program websites, using Typescript, and React (fun fact: this entire website is written
                        with React and Next.js). I can do CSS as well. I also develop a few applications, most notably
                        the Dot Browser.</p>

                    <p>I'm trying to learn more programming languages, such as Rust and Python.</p>

                    <p>I am a major fan of privacy, and usually try and use as many privacy-focused alternatives as
                        possible.</p>
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
                        <span style={{ width: 'fit-content' }}>
                            <Link href={"https://twitter.com/trevorthalacker"}>
                                <a>
                                    <ContactSocialLink>
                                        <i className={'icon twitter-icon'} />
                                        Twitter
                                    </ContactSocialLink>
                                </a>
                            </Link>
                        </span>
                        <span style={{ width: 'fit-content' }}>
                            <Link href={"https://reddit.com/u/IAmAwesomeTech10"}>
                                <a>
                                    <ContactSocialLink>
                                        <i className={'icon reddit-icon'} />
                                        Reddit
                                    </ContactSocialLink>
                                </a>
                            </Link>
                        </span>
                        <span style={{ width: 'fit-content' }}>
                            <Link href={"https://discord.com/users/381541244360327168"}>
                                <a>
                                    <ContactSocialLink>
                                        <i className={'icon discord-icon'} />
                                        Discord (Trevor#7688)
                                    </ContactSocialLink>
                                </a>
                            </Link>
                        </span>
                        <span style={{ width: 'fit-content' }}>
                            <Link href={"https://github.com/trevorthalacker"}>
                                <a>
                                    <ContactSocialLink>
                                        <i className={'icon github-icon'} />
                                        Github
                                    </ContactSocialLink>
                                </a>
                            </Link>
                        </span>
                        <span style={{ width: 'fit-content' }}>
                            <Link href={"https://mastodon.online/@trevorthalacker"}>
                                <a>
                                    <ContactSocialLink>
                                        <i className={'icon mastodon-icon'} />
                                        Mastodon
                                    </ContactSocialLink>
                                </a>
                            </Link>
                        </span>
                    </ContactGrid>

                    <h2>Email</h2>

                    <p>You could just email me, through this domain. I have a catch-all setup, so any email sent to
                        @{config.hostname} will probably make it to me. For best results, please try and email me
                        at <span style={{ display: 'inline-block' }}>
                            <Link href={"mailto:hello@trevorthalacker.com"}><a>hello@{config.hostname}</a></Link>
                        </span>.</p>
                </Container>
        </Layout>
      </>
  )
}

export default Index
