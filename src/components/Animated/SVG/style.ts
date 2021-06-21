import styled, { css, keyframes } from 'styled-components'

export const backgroundAnimationVertical = keyframes`
    from {
        transform: translateY(0);
    }

    to {
        transform: translateY(30px);
    }
`

export const backgroundAnimationVerticalLong = keyframes`
    from {
        transform: translateY(0);
    }

    to {
        transform: translateY(200px);
    }
`

export const backgroundAnimationHorizontal = keyframes`
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(30px);
    }
`

export const backgroundAnimationHorizontalWide = keyframes`
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(200px);
    }
`

export const AnimatedBackground = styled.svg`
    ${({
        slow,
        large,
        horizontal,
    }: {
        slow: boolean
        large: boolean
        horizontal: boolean
    }) => css`
        /* i'm certain theres a better way to do this */
        animation: ${horizontal
                ? large
                    ? backgroundAnimationHorizontalWide
                    : backgroundAnimationHorizontal
                : large
                ? backgroundAnimationVerticalLong
                : backgroundAnimationVertical}
            ${slow ? '11s' : large ? '10s' : '4s'} ease-in-out infinite
            alternate;
    `}
`
