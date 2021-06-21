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
