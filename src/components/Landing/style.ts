import styled from 'styled-components'

export const StyledLanding = styled.div`
    padding: 0 18px;
    display: flex;
    height: 100vh;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
`

export const HeaderText = styled.h1`
    line-height: 112px;
    font-size: 5rem;
    font-weight: 100;
    color: ${(props) => props.theme.colors.tertiary};
    @media only screen and (max-width: 1224px) {
        font-size: 3.5rem;
        line-height: 3.5rem;
    }
    @media only screen and (max-width: 400px) {
        font-size: 2.5rem;
        line-height: 2.5rem;
    }
`

export const SubheaderText = styled.h2`
    line-height: 48px;
    font-size: 1.5rem;
    font-weight: 300;
    color: ${(props) => props.theme.ui.color};
    align-self: start;
    display: flex;
`
