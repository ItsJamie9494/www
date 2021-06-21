import React from 'react'
import { AnimatedSVG } from './SVG'

export const AnimatedBackground = () => {
    // I might want to randomize this later
    return (
        <>
            <>
                {/* NORMAL ANIMATION */}
                <AnimatedSVG
                    icon="triangle"
                    width={48}
                    stroke
                    left="10%"
                    top="20%"
                />
                <AnimatedSVG
                    icon="hexa"
                    width={48}
                    stroke
                    left="60%"
                    top="70%"
                />
                <AnimatedSVG icon="box" width={6} left="60%" top="15%" />
            </>

            <>
                {/* WIDE ANIMATION */}
                <AnimatedSVG
                    icon="triangle"
                    width={24}
                    stroke
                    left="65%"
                    top="8%"
                    animation="wide"
                />
                <AnimatedSVG
                    icon="triangle"
                    width={12}
                    stroke
                    left="90%"
                    top="50%"
                    animation="wide"
                />
                <AnimatedSVG
                    icon="triangle"
                    width={16}
                    stroke
                    left="30%"
                    top="65%"
                    animation="wide"
                />
            </>

            <>
                {/* SLOW ANIMATION */}
                <AnimatedSVG
                    icon="circle"
                    width={20}
                    hiddenMobile
                    left="85%"
                    top="25%"
                    animation="slow"
                />
                <AnimatedSVG
                    icon="circle"
                    hiddenMobile
                    stroke
                    width={24}
                    left="5%"
                    top="70%"
                    animation="slow"
                />
                <AnimatedSVG
                    icon="circle"
                    width={6}
                    left="4%"
                    top="20%"
                    animation="slow"
                />
                <AnimatedSVG
                    icon="circle"
                    width={12}
                    left="50%"
                    top="60%"
                    animation="slow"
                />
            </>
        </>
    )
}
