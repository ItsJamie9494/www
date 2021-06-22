import React from 'react'
import Layout from '../components/Layout'
import { Head, Landing, Subheader } from '../components/Landing'
import { Project } from '../components/Project'
import {
    CenteredElement,
    Container,
    RepositoriesGrid,
} from '../components/Page'
import axios from 'axios'
import { Repository } from '../components/Repository'
import config from '../config'
import { TextButton } from '../components/Button'

const Index = (props) => {
    return (
        <>
            <Layout title={'Work'}>
                <Landing>
                    <CenteredElement>
                        <Head>My Work</Head>
                        <Subheader>
                            A quick list of my past and present projects
                        </Subheader>
                    </CenteredElement>
                </Landing>
                <Container>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        {/* DATA RETURNED FROM GITHUB API*/}
                        <Project
                            description={
                                'Dot Browser is a privacy-conscious web browser with smarts built-in for protection against trackers and advertisements online.'
                            }
                            image={'/assets/projects/dotbrowser.png'}
                            repo={'dothq/browser'}
                            name={'Dot Browser'}
                            language={
                                'Python'
                            } /* DATA RETURNED FROM GITHUB API*/
                        />
                        <Project
                            description={
                                'A free, private URL shortener with the greatest domain in existence.'
                            }
                            image={'/assets/projects/binguslink.png'}
                            repo={'trevorthalacker/bingus.link'}
                            name={'bingus.link'}
                            language={'TypeScript'}
                        />
                        <Project
                            description={
                                'keyboardnotfound.com is a joke website, that shows the famous "Keyboard not found, Press F1 to continue" message.'
                            }
                            image={'/assets/projects/keyboardnotfound.png'}
                            repo={'trevorthalacker/keyboardnotfound'}
                            name={'keyboardnotfound.com'}
                            language={'JavaScript'}
                        />
                        {/*
                        <Project
                            header={'Lead Developer'}
                            projectName={'bingus.link'}
                            projectDescription={
                                'A free, private URL shortener with the greatest domain in existence.'
                            }
                            projectWebsite={'https://bingus.link'}
                            projectImage={'/assets/projects/binguslink.png'}
                            projectRepository={
                                'https://github.com/trevorthalacker/bingus.link'
                            }
                        /> */}
                    </div>

                    <CenteredElement>
                        <Head>Repositories</Head>
                        <p>A list of public repositories on my Github page</p>
                        <TextButton>
                            <i className={'icon github-icon'} /> View my Profile
                        </TextButton>
                    </CenteredElement>
                    <RepositoriesGrid>
                        {props.repositories.map((repo) => (
                            <Repository repo={repo} key={repo.id} />
                        ))}
                        <p>
                            Note: An{' '}
                            <span style={{ color: 'rgba(217, 119, 6, 1)' }}>
                                orange
                            </span>{' '}
                            language tag references an archived project
                        </p>
                    </RepositoriesGrid>
                </Container>
            </Layout>
        </>
    )
}

export default Index

export async function getServerSideProps(context) {
    let res: Object = []
    await axios
        .get(
            `${process.env.NODE_ENV === 'production' ? 'https' : 'http'}://${
                config.hostname
            }/api/github`
        )
        .then((data) => {
            res = data.data
        })
    return {
        props: {
            repositories: res,
        }, // will be passed to the page component as props
    }
}
