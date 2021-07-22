import styled, { css, keyframes } from 'styled-components'

const AnimatedSpinnerRing = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

export const StyledSpinner = styled.div`
    display: inline-block;
    margin: 0;
    padding: 0;

    ${({ size }: { size: number }) => css`
        width: ${size}px;
        height: ${size}px;

        &::after {
            content: '';
            display: block;
            width: ${size - 5}px;
            height: ${size - 5}px;
            border-radius: 50%;
            border: 3px solid ${(props) => props.theme.colors.tertiary};
            border-color: ${(props) => props.theme.colors.tertiary}
                ${(props) => props.theme.colors.tertiary}
                ${(props) => props.theme.colors.tertiary} transparent;
            animation: ${AnimatedSpinnerRing} 1.2s linear infinite;
        }
    `}
`
