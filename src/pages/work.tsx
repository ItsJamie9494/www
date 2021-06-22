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
import { Repository as IRepository } from '../interfaces/IRepository'

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
                        {/* DATA RETURNED FROM GITHUB API */}
                        <Project
                            description={
                                'Dot Browser is a privacy-conscious web browser with smarts built-in for protection against trackers and advertisements online.'
                            }
                            image={'/assets/projects/dotbrowser.png'}
                            repo={'dothq/browser'}
                            name={'Dot Browser'}
                            language={'Python'}
                            link={'https://dothq.co'}
                        />
                        <Project
                            description={
                                'A free, private URL shortener with the greatest domain in existence.'
                            }
                            image={'/assets/projects/binguslink.png'}
                            repo={'trevorthalacker/bingus.link'}
                            name={'bingus.link'}
                            language={'TypeScript'}
                            link={'https://bingus.link'}
                        />
                        <Project
                            description={
                                'keyboardnotfound.com is a joke website, that shows the famous "Keyboard not found, Press F1 to continue" message.'
                            }
                            image={'/assets/projects/keyboardnotfound.png'}
                            repo={'trevorthalacker/keyboardnotfound'}
                            name={'keyboardnotfound.com'}
                            language={'JavaScript'}
                            link={'https://keyboardnotfound.com'}
                        />
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
            `https://api.github.com/users/${config.username}/repos?per_page=100`
        )
        .then((data) => {
            let response = data.data
            let repos = []

            ;(response as Array<IRepository>).map((repo) => {
                if (!repo.fork) {
                    let strippedRepo = {
                        id: repo.id,
                        name: repo.name,
                        html_url: repo.html_url,
                        created_at: repo.created_at,
                        pushed_at: repo.pushed_at,
                        language: repo.language,
                        description: repo.description,
                        fork: repo.fork,
                        stargazers_count: repo.stargazers_count,
                        archived: repo.archived,
                    }
                    repos.push(strippedRepo)
                }
            })

            return (res = repos)
        })

    return {
        props: {
            repositories: res,
        }, // will be passed to the page component as props
    }
}
