/* components/Animated/index.tsx
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

import React from 'react'
import { StyledAnimatedBackground } from './style'
import { AnimatedSVG } from './SVG'

export const AnimatedBackground = () => {
    return (
        <StyledAnimatedBackground>
            <>
                {/* NORMAL ANIMATION */}
                <AnimatedSVG
                    icon="triangle"
                    width={48}
                    stroke
                    left={`${Math.floor(Math.random() * 101)}%`}
                    top={`${Math.floor(Math.random() * 101)}%`}
                />
                <AnimatedSVG
                    icon="hexa"
                    width={48}
                    stroke
                    left={`${Math.floor(Math.random() * 101)}%`}
                    top={`${Math.floor(Math.random() * 101)}%`}
                />
                <AnimatedSVG
                    icon="box"
                    width={6}
                    left={`${Math.floor(Math.random() * 80)}%`}
                    top={`${Math.floor(Math.random() * 80)}%`}
                    horizontal={Math.random() < 0.5}
                />
            </>

            <>
                {/* WIDE ANIMATION */}
                <AnimatedSVG
                    icon="triangle"
                    width={24}
                    stroke
                    left={`${Math.floor(Math.random() * 101)}%`}
                    top={`${Math.floor(Math.random() * 101)}%`}
                    animation="wide"
                />
                <AnimatedSVG
                    icon="triangle"
                    width={12}
                    stroke
                    left={`${Math.floor(Math.random() * 80)}%`}
                    top={`${Math.floor(Math.random() * 80)}%`}
                    animation="wide"
                    horizontal={Math.random() < 0.5}
                />
                <AnimatedSVG
                    icon="triangle"
                    width={16}
                    stroke
                    left={`${Math.floor(Math.random() * 80)}%`}
                    top={`${Math.floor(Math.random() * 80)}%`}
                    animation="wide"
                    horizontal={Math.random() < 0.5}
                />
            </>

            <>
                {/* SLOW ANIMATION */}
                <AnimatedSVG
                    icon="circle"
                    width={20}
                    hiddenMobile
                    left={`${Math.floor(Math.random() * 101)}%`}
                    top={`${Math.floor(Math.random() * 101)}%`}
                    animation="slow"
                />
                <AnimatedSVG
                    icon="circle"
                    hiddenMobile
                    stroke
                    width={24}
                    left={`${Math.floor(Math.random() * 101)}%`}
                    top={`${Math.floor(Math.random() * 101)}%`}
                    animation="slow"
                />
                <AnimatedSVG
                    icon="circle"
                    width={6}
                    left={`${Math.floor(Math.random() * 80)}%`}
                    top={`${Math.floor(Math.random() * 80)}%`}
                    animation="slow"
                    horizontal={Math.random() < 0.5}
                />
                <AnimatedSVG
                    icon="circle"
                    width={12}
                    left={`${Math.floor(Math.random() * 80)}%`}
                    top={`${Math.floor(Math.random() * 80)}%`}
                    animation="slow"
                    horizontal={Math.random() < 0.5}
                />
            </>
        </StyledAnimatedBackground>
    )
}