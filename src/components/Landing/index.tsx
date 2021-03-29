import React from 'react';

import { StyledLanding, HeaderText, SubheaderText } from './style';

export const Landing = ({ children }: { children: any }) => {
    return (
        <StyledLanding>
            <div>
                {children}
            </div>
        </StyledLanding>
    )
}

export const Head = ({ children }) => {
    return (
        <HeaderText>
            {children}
        </HeaderText>
    )
}

export const Subheader = ({ children }) => {
    return (
        <SubheaderText>
            {children}
        </SubheaderText>
    )
}
