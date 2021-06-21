import styled, { css } from 'styled-components'

export const StyledFooter = styled.div`
    height: 80px;
    width: 100%;
    position: relative;
    bottom: 0;
    text-decoration: none;
    ${({ isBlurred }: { isBlurred: boolean }) => css`
        backdrop-filter: blur(${isBlurred ? 8 : 0}px);
        background-color: rgb(
            ${(props) => (props.theme.isDark ? '0 0 0' : '255 255 255')} /
                ${isBlurred ? 69 : 0}%
        );
    `};
    background-color: ${(props) => props.theme.ui.secondaryBackground};
    /* Something for the future
    background-image: ${(props) =>
        `linear-gradient(${props.theme.ui.background}, ${props.theme.ui.secondaryBackground} 10%)`}; */
    @media print {
        display: none;
    }
    transition: background-color 0.5s;
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
    i {
        width: 24px;
        height: 24px;
        filter: invert(${(props) => (props.theme.isDark ? 1 : 0)});
        transition: opacity 0.5s ease 0s, filter 0.5s ease;
        &:hover {
            opacity: 0.6;
            cursor: pointer;
        }
    }
    @media screen and (max-width: 660px) {
        flex-direction: column;
        align-items: center;
    }
`

export const Image = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 64px;
    margin: 0 20px 0 auto;
    transition: 0.5s transform;
    &:hover {
        transform: scale(1.1);
        cursor: pointer;
    }
`

export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 380px) {
        flex-direction: column;
        align-items: center;
        justify-items: center;
    }
`

export const LinkContainer = styled.div`
    display: grid;
    gap: 20px;
    grid-auto-flow: column;
    @media screen and (max-width: 380px) {
        gap: 10px;
        grid-auto-flow: row;
        margin-bottom: 20px;
        margin-top: 20px;
        a {
            width: fit-content;
        }
    }
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
`

export const CopyrightContainer = styled.div`
    display: grid;
    gap: 20px;
    grid-auto-flow: column;
    transition: 0.5s opacity;
    color: ${(props) => props.theme.colors.tertiary};
    text-decoration: none;
    @media screen and (max-width: 660px) {
        margin-bottom: 20px;
        align-items: center;
        text-align: center;
    }
    p {
        margin: 2px 0;
        padding: 0;
    }
`

export const EggToast = styled.span`
    width: max-content;
    height: auto;
    margin: 0 auto;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 10px;
    background-color: ${(props) => props.theme.colors.tertiary};
    color: ${(props) => props.theme.colors.secondary};
    font-size: 15px;
    padding: 15px 40px 15px 40px;
    text-align: center;
    border-radius: 25px;
    opacity: 0.7;
    z-index: 999999;
    @media screen and (max-width: 660px) {
        display: none; // too lazy to bother programming this for tiny screens
    }
`
