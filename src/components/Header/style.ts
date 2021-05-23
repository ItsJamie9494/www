import styled, { css } from 'styled-components'

export const StyledHeader = styled.div`
    height: 80px;
    width: 100%;
    position: fixed;
    top: 0;
    transition: 0.5s background-color, 0.5s box-shadow;
    text-decoration: none;
    background-color: ${(props) => props.theme.ui.background}E6;
    z-index: 999999999;
    ${({ isBlurred }: { isBlurred: boolean }) => css`
        box-shadow: ${isBlurred ? '0 0 10px 0' : ''}
            ${isBlurred ? (props) => props.theme.colors.tertiary + 'A6' : ''};
    `}
    @media print {
        display: none;
    }
`

export const Container = styled.div`
    margin: 0px auto;
    max-width: 1164px;
    color: black;
    height: 80px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 15px;
    justify-content: space-between;
    text-decoration: none;
    a {
        font-size: 16px;
        text-decoration: none;
    }
`

export const Image = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 64px;
    margin: 0;
    transition: 0.5s transform;
    &:hover {
        transform: scale(1.1);
        cursor: pointer;
    }
`

export const LinkContainer = styled.div`
    display: grid;
    gap: 20px;
    grid-auto-flow: column;
    margin: 0 auto;
    transition: 0.5s opacity;
    color: ${(props) => props.theme.colors.tertiary};
    text-decoration: none;
    ${({ isBlurred }: { isBlurred: boolean }) => css`
        opacity: ${isBlurred ? 0 : 1};
        pointer-events: ${isBlurred ? 'none' : 'all'};
        text-decoration: none;
    `}
    a:hover {
        transition: 0.5s opacity;
    }
    @media screen and (max-width: 600px) {
        display: none;
    }
`

export const DesktopButton = styled.span`
    @media screen and (max-width: 600px) {
        display: none;
    }
`

export const Dropdown = styled.div`
    @media screen and (min-width: 600px) {
        display: none;
    }
`

export const MobileContainer = styled.div`
    position: absolute;
    top: 80px;
    ${({ isVisible }: { isVisible: boolean }) => css`
        transform: translateY(${isVisible ? '0%' : '-200%'});
    `}
    left: 0;
    background-color: ${(props) => props.theme.ui.background};
    transition: 0.5s background-color, 0.5s transform;
    width: 100%;
    z-index: 0;
`

export const MobileLinkContainer = styled.div`
    display: grid;
    grid-auto-flow: row;
    gap: 0;
`

export const MobileLink = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
    &:hover {
        opacity: 0.6;
        transition: 0.5s opacity;
        cursor: pointer;
    }
`
