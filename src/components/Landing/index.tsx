import React from 'react'
import { AnimatedBackground } from '../Animated'

import { StyledLanding, HeaderText, SubheaderText } from './style'

export const Landing = ({ children }: { children: any }) => {
    return (
        <StyledLanding>
            <AnimatedBackground />
            <div>{children}</div>
        </StyledLanding>
    )
}

export const Head = ({ children }) => {
    return <HeaderText>{children}</HeaderText>
}

export const Subheader = ({ children }) => {
    return <SubheaderText>{children}</SubheaderText>
}
