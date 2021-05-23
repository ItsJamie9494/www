import React from 'react'
import Layout from '../components/Layout'
import { Head, Landing, Subheader } from '../components/Landing'
import { Container } from '../components/Page'
import Typist from 'react-typist'

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
                        Hey there,{' '}
                        <span onClick={() => window.location.replace('/maybe')}>
                            my name
                        </span>{' '}
                        is Trevor Thalacker. You might also know me as
                        "AwesomeTech10," which was my online identity for a few
                        years, before I decided to use my name. I program stuff,
                        usually website stuff.
                    </p>

                    <h2>More Information</h2>

                    <p>
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
                    </p>
                </Container>
            </Layout>
        </>
    )
}

export default About
