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

        colour,
        zIndex,
        stroke,
        width,
        left,
        top,
        hiddenMobile,
    }: {
        slow: boolean
        large: boolean
        horizontal: boolean

        colour: string
        zIndex: number
        stroke: boolean
        width: number
        left: string
        top: string
        hiddenMobile: boolean
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
        position: absolute;
        filter: blur(8px) saturate(160%);
        overflow: visible;
        stroke: ${!!stroke ? 'currentColor' : 'none'};
        fill: ${stroke ? 'none' : 'currentColor'};
        display: ${hiddenMobile ? '{ base: `none`, md: `block` }' : 'block'};
        color: ${colour};
        z-index: ${zIndex};
        width: ${width};
        left: ${left};
        top: ${top};
    `}
`
