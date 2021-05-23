import React from 'react'

import { CenteredElement } from '../Page'
import { Head, Subheader } from '../Landing'

export const AboutPage = () => {
    return (
        <>
            <CenteredElement>
                <Head>About Me</Head>
                <span>
                    {' '}
                    {/** Unknown why this is nessecary, but without this the element isn't centered */}
                    <Subheader>$ whoami</Subheader>
                </span>
            </CenteredElement>

            <p>
                Hey there,{' '}
                <span onClick={() => window.location.replace('/maybe')}>
                    my name
                </span>{' '}
                is Trevor Thalacker. You might also know me as "AwesomeTech10,"
                which was my online identity for a few years, before I decided
                to use my name. I program stuff, usually website stuff.
            </p>

            <Subheader>More Information</Subheader>

            <p>
                I mostly program websites, using Typescript, and React (fun
                fact: this entire website is written with React and Next.js). I
                can do CSS as well. I also develop a few applications, most
                notably the Dot Browser.
            </p>

            <p>
                I'm trying to learn more programming languages, such as Rust and
                Python.
            </p>

            <p>
                I am a major fan of privacy, and usually try and use as many
                privacy-focused alternatives as possible.
            </p>
        </>
    )
}
