import React from 'react'
import Layout from '../components/Layout'
import { Head, Landing } from '../components/Landing'
import { Project } from '../components/Project'
import {
    CenteredElement,
    Container,
    RepositoriesGrid,
} from '../components/Page'
import axios from 'axios'
import { darkTheme } from '../theme'
import FeatherIcon from 'feather-icons-react'
import { Repository } from '../components/Repository'
import config from '../config'

const Index = (props) => {
    return (
        <>
            <Layout title={'Work'}>
                <Landing>
                    <Head>My Work</Head>
                </Landing>
                <Container>
                    <p>
                        This is a comprehensive list of all projects that I have
                        worked on, as well as organizations I've worked with
                    </p>
                    <Project
                        header={'Developer'}
                        projectName={'Dot Browser'}
                        projectDescription={
                            'Dot Browser is a privacy-conscious web browser with smarts built-in for protection against trackers and advertisements online.'
                        }
                        projectWebsite={'https://dothq.co'}
                        projectImage={'/assets/projects/dotbrowser.png'}
                        projectRepository={'https://github.com/dothq'}
                    />
                    <Project
                        header={'Lead Developer'}
                        projectName={'keyboardnotfound.com'}
                        projectDescription={
                            'keyboardnotfound.com is a joke website, that shows the famous "Keyboard not found, Press F1 to continue" message.'
                        }
                        projectWebsite={'https://keyboardnotfound.com'}
                        projectImage={'/assets/projects/keyboardnotfound.png'}
                        projectRepository={
                            'https://github.com/trevorthalacker/keyboardnotfound'
                        }
                    />
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
                    />
                    <CenteredElement>
                        <Head>Repositories</Head>
                        <p>A list of public repositories on my Github page</p>
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
            }api/github`
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
