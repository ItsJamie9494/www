import React from 'react';
import Link from 'next/link'
import { StyledProject, Heading, ProjectName, ProjectDescription, ProjectLink, ProjectImage, DiscontinuedPill } from './style';

export const Project = ({
    header,
    projectName,
    projectDescription,
    projectWebsite,
    projectRepository,
    projectImage,
    noRepo,
    discontinued,
}: {
    header: string,
    projectName: string,
    projectDescription: string,
    projectWebsite: string,
    projectRepository?: string,
    projectImage: string,
    noRepo?: boolean,
    discontinued?: boolean
}) => {

    return (
        <StyledProject>
            <Heading>{header}</Heading>
            <ProjectName>{projectName} {discontinued && (<DiscontinuedPill>Discontinued</DiscontinuedPill>)}</ProjectName>
            <ProjectDescription>{projectDescription}</ProjectDescription>
            <div style={{ display: 'grid', gridAutoFlow: 'column', gap: '30px', margin: '0 auto' }}>
                <ProjectLink><Link href={projectWebsite}>Visit Website</Link></ProjectLink>
                {!noRepo && ( <ProjectLink><Link href={projectRepository}>View Source Code</Link></ProjectLink> )}
            </div>
            <ProjectImage src={projectImage} />
        </StyledProject>
    )
}
