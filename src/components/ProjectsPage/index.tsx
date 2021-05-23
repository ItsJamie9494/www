import React from 'react'

import { CenteredElement } from '../Page'
import { Head, Subheader } from '../Landing'
import { Project } from '../Project'
import { ProjectsGrid } from './style'

export const ProjectsPage = () => {
    return (
        <>
            <CenteredElement>
                <Head>My Work</Head>
                <span>
                    <Subheader>
                        A comprehensive list of all projects that I have worked
                        on.
                    </Subheader>
                </span>
            </CenteredElement>
            <ProjectsGrid>
                <Project
                    header={'Developer'}
                    projectName={'Dot Browser'}
                    projectDescription={
                        'Dot Browser is a privacy-conscious web browser with smarts built-in for protection against trackers and advertisements online.'
                    }
                    projectWebsite={'https://www.dothq.co'}
                    projectImage={'/assets/projects/icons/dotbrowser.png'}
                    projectRepository={'https://github.com/dothq'}
                />
                <Project
                    header={'Lead Developer'}
                    projectName={'keyboardnotfound.com'}
                    projectDescription={
                        'keyboardnotfound.com is a joke website, that shows the famous "Keyboard not found, Press F1 to continue" message.'
                    }
                    projectWebsite={'https://keyboardnotfound.com'}
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
                    projectImage={'/assets/projects/icons/binguslink.png'}
                    projectRepository={
                        'https://github.com/trevorthalacker/bingus.link'
                    }
                />
            </ProjectsGrid>
            <CenteredElement>
                <p>And hopefully more to come in the future!</p>
            </CenteredElement>
        </>
    )
}
