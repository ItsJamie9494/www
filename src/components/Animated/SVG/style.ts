import styled, { css, keyframes } from 'styled-components'

export const backgroundAnimationUp = keyframes`
    from {
        transform: translateY(0);
    }

    to {
        transform: translateY(30px);
    }
`

export const backgroundAnimationUpWide = keyframes`
    from {
        transform: translateY(0);
    }

    to {
        transform: translateY(200px);
    }
`

export const AnimatedBackground = styled.svg`
    ${({ slow, wide }: { slow: boolean; wide: boolean }) => css`
        animation: ${wide ? backgroundAnimationUpWide : backgroundAnimationUp}
            ${slow ? '11s' : wide ? '10s' : '4s'} ease-in-out infinite alternate;
    `}
`
