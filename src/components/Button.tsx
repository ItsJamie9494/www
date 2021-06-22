import styled, { css } from 'styled-components'

export const Button = styled.div`
    ${({
        shade,
        disabled,
    }: {
        shade: 'blue' | 'white' | 'gray' | 'black' | 'red'
        disabled?: boolean
    }) => css`
        background-color: ${shade == 'blue'
            ? '#0070F3'
            : shade == 'white'
            ? '#ffffff'
            : shade == 'black'
            ? 'black'
            : shade == 'red'
            ? '#ff5d5d'
            : '#303030'};
        pointer-events: ${disabled ? 'none' : 'all'};
        opacity: ${disabled ? 0.5 : 1};
    `}
    border-radius: 4px;
    padding: 6px 18px;
    font-size: 16px;
    letter-spacing: 0.3px;
    width: fit-content;
    color: ${(props) => props.theme.colors.tertiary};
    background-color: ${(props) => props.theme.ui.secondaryBackground};
    border: 1px solid color ${(props) => props.theme.ui.border};
    ${(props) =>
        props.theme.isDark
            ? `
    box-shadow: 0 5px 10px rgba(0,0,0,0.12);
  `
            : ''}
    &:hover {
        cursor: pointer;
        background-color: ${(props) => props.theme.ui.secondaryBackground}EA;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
        opacity: 0.7;
    }
    text-align: center;
    transition: 0.5s background-color, 0.5s box-shadow, 0.5s transform,
        0.5s border, 0.2s opacity;

    i {
        width: 24px;
        height: 24px;
        filter: invert(${(props) => (props.theme.isDark ? 1 : 0)});
        transition: opacity 0.5s ease 0s, filter 0.5s ease;
        margin-right: 5px;
    }
`

export const HeroButton = styled(Button)`
    ${({ noBG }: { noBG: boolean }) => css`
        background-color: inherit;
    `}
    height: 50px;
    display: flex;
    vertical-align: middle;
    align-items: center;
`

export const TextButton = styled.div`
    background-color: transparent;
    padding: 0px 12px;
    font-size: 16px;
    color: ${(props) => props.theme.colors.primary};
    letter-spacing: 0.3px;
    transition: 0.2s background-color, 0.2s opacity;
    display: flex;
    &:hover {
        cursor: pointer;
        opacity: 0.7;
        text-decoration: none;
    }
    @media screen and (max-width: 800px) {
        & {
            padding: 0px 10px;
        }
    }
    ${({ isBasic }: { isBasic?: boolean }) => css`
        ${isBasic
            ? `
            
            display: inline-block;
            padding: 0;
            color: rgb(0, 112, 243);
            transition: 0.1s box-shadow;
            &:hover {
                opacity: 1;
            }
        `
            : ''}
    `}
    i {
        width: 24px;
        height: 24px;
        filter: invert(${(props) => (props.theme.isDark ? 1 : 0)});
        transition: opacity 0.5s ease 0s, filter 0.5s ease;
        margin: 0 10px;
    }
`

export const IconButton = styled(TextButton)`
    display: flex;
    align-items: center;
    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
    color: ${(props) => props.theme.colors.tertiary}; ;
`
