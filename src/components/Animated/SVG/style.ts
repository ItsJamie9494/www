/* components/Animated/SVG/style.ts
 *
 * Copyright 2021 Jamie Thalacker
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import styled from '@emotion/styled'
import { keyframes, css } from '@emotion/react'

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
        filter: blur(4px) saturate(160%);
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
