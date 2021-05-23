import React from 'react'
import Layout from '../components/Layout'
import { Head, Landing, Subheader } from '../components/Landing'
import config from '../config'
import Typist from 'react-typist'
import { Container } from '../components/Page'
import { AboutPage } from '../components/AboutPage'
import { ProjectsPage } from '../components/ProjectsPage'
import { ContactPage } from '../components/ContactPage'

const Index = () => {
    return (
        <>
            <Layout title={'Home'}>
                <Landing>
                    <div style={{ flexDirection: 'row' }}>
                        <Typist
                            cursor={{
                                show: false,
                            }}
                        >
                            <Head>
                                Hi, I'm <b>{config.name}</b>
                            </Head>
                            <br />
                            <Subheader>{config.description}</Subheader>
                        </Typist>
                    </div>
                </Landing>
                <Container>
                    <ProjectsPage />

                    <AboutPage />

                    <ContactPage />
                </Container>
            </Layout>
        </>
    )
}

export default Index
