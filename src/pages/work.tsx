import React from 'react'
import Layout from '../components/Layout'
import { Head, Landing, Subheader } from '../components/Landing'
import { Project } from '../components/Project'
import {
    CenteredElement,
    Container,
    RepositoriesGrid,
} from '../components/Page'
import { Repository } from '../components/Repository'
import config from '../config'
import { TextButton } from '../components/Button'
import { Repository as IRepository } from '../interfaces/IRepository'
import { gitlab } from '../lib/gitlab'
import { Spinner } from '../components/Spinner'
import Link from 'next/link'

const Index = () => {
    const [repos, setRepos] = React.useState(Array<IRepository[]>())

    React.useEffect(() => {
        // This will gather all the information for projects
        const gatherProjects = async () => {
            let res: Array<IRepository[]> = []

            let GitlabAPI = new gitlab()

            let archivedProjects = await GitlabAPI.profiles(true)
            let activeProjects = await GitlabAPI.profiles(false)

            for (let i = 0; i < activeProjects.length; i++) {
                res.push(activeProjects[i])
            }

            // archived projects last
            for (let i = 0; i < archivedProjects.length; i++) {
                res.push(archivedProjects[i])
            }

            return res
        }

        gatherProjects().then((data) => {
            return setRepos(data)
        })
    }, [])
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
                            gh={true} // This repo is on Github
                        />
                        <Project
                            description={
                                'A free, private URL shortener with the greatest domain in existence.'
                            }
                            image={'/assets/projects/binguslink.png'}
                            repo={`${config.username}/bingus-link`}
                            name={'bingus.link'}
                            language={'TypeScript'}
                            link={'https://bingus.link'}
                        />
                        <Project
                            description={
                                'keyboardnotfound.com is a joke website, that shows the famous "Keyboard not found, Press F1 to continue" message.'
                            }
                            image={'/assets/projects/keyboardnotfound.png'}
                            repo={`${config.username}/keyboardnotfound`}
                            name={'keyboardnotfound.com'}
                            language={'JavaScript'}
                            link={'https://keyboardnotfound.com'}
                        />
                    </div>

                    <CenteredElement>
                        <Head>Repositories</Head>
                        <p>A list of public repositories on my Gitlab page</p>
                        <TextButton>
                            <Link
                                href={`https://gitlab.com/${config.username}`}
                            >
                                <a>
                                    <span
                                        style={{
                                            display: 'flex',
                                            marginLeft: -10,
                                        }}
                                    >
                                        <i className={'icon gitlab-icon'} />{' '}
                                        View my Profile
                                    </span>
                                </a>
                            </Link>
                        </TextButton>
                    </CenteredElement>
                    {repos.length != 0 ? (
                        <RepositoriesGrid>
                            {repos.map((repo) => (
                                <Repository
                                    repo={repo as unknown as IRepository}
                                    key={(repo as unknown as IRepository).id}
                                />
                            ))}
                        </RepositoriesGrid>
                    ) : (
                        <CenteredElement>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <Spinner size={25} />
                                <p>Loading Repositories...</p>
                            </div>
                        </CenteredElement>
                    )}

                    {/* <p>
                            Note: An{' '}
                            <span style={{ color: 'rgba(217, 119, 6, 1)' }}>
                                orange
                            </span>{' '}
                            language tag references an archived project
                        </p> */}
                </Container>
            </Layout>
        </>
    )
}

export default Index
