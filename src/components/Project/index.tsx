import React from 'react'
import Link from 'next/link'
import {
    StyledProject,
    Heading,
    ProjectName,
    ProjectDescription,
    ProjectLink,
    ProjectImage,
    DiscontinuedPill,
} from './style'

export const Project = ({
    header,
    projectName,
    projectDescription,
    projectWebsite,
    projectRepository,
    projectImage,
    discontinued,
}: {
    header: string
    projectName: string
    projectDescription: string
    projectWebsite: string
    projectRepository?: string
    projectImage?: string
    discontinued?: boolean
}) => {
    return (
        <StyledProject>
            {projectImage && <ProjectImage src={projectImage} />}

            <Heading>{header}</Heading>
            <ProjectName>
                {projectName}{' '}
                {discontinued && (
                    <DiscontinuedPill>Discontinued</DiscontinuedPill>
                )}
            </ProjectName>
            <ProjectDescription>{projectDescription}</ProjectDescription>
            <div
                style={{
                    display: 'grid',
                    gridAutoFlow: 'column',
                    gap: '30px',
                    margin: '0 auto',
                }}
            >
                <ProjectLink>
                    <Link href={projectWebsite}>Visit Website</Link>
                </ProjectLink>
                {projectRepository && (
                    <ProjectLink>
                        <Link href={projectRepository}>View Source Code</Link>
                    </ProjectLink>
                )}
            </div>
        </StyledProject>
    )
}
