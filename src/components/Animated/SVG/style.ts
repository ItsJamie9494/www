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

import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'

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

const BackgroundSVG = (props: any) => css`
    animation: ${props.horizontal
            ? props.large
                ? backgroundAnimationHorizontalWide
                : backgroundAnimationHorizontal
            : props.large
            ? backgroundAnimationVerticalLong
            : backgroundAnimationVertical}
        ${props.slow ? '11s' : props.large ? '10s' : '4s'} ease-in-out infinite
        alternate;
    position: absolute;
    filter: blur(4px) saturate(160%);
    overflow: visible;
    stroke: ${!!props.stroke ? 'currentColor' : 'none'};
    fill: ${props.stroke ? 'none' : 'currentColor'};
    display: ${props.hiddenMobile ? '{ base: `none`, md: `block` }' : 'block'};
    color: ${props.colour};
    z-index: ${props.zIndex};
    width: ${props.width};
    left: ${props.left};
    top: ${props.top};
`

export const AnimatedBackground = styled.svg`
    ${BackgroundSVG}
`
