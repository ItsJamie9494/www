import React from 'react'
import { useGlobalState } from '../../../globals'
import { AnimatedBackground } from './style'

const icons = {
    triangle: {
        shape: (
            <polygon
                strokeWidth="1px"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                points="14.921,2.27 28.667,25.5 1.175,25.5 "
            />
        ),
        viewBox: `0 0 30 30`,
    },
    circle: {
        shape: (
            <path d="M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,6.23A8.77,8.77,0,1,0,23.77,15,8.77,8.77,0,0,0,15,6.23Z" />
        ),
        viewBox: `0 0 30 30`,
    },

    box: {
        shape: (
            <path d="M28,2V28H2V2H28m.13-2H1.88A1.88,1.88,0,0,0,0,1.88V28.13A1.88,1.88,0,0,0,1.88,30H28.13A1.87,1.87,0,0,0,30,28.13V1.88A1.88,1.88,0,0,0,28.13,0Z" />
        ),
        viewBox: `0 0 30 30`,
    },
    hexa: {
        shape: (
            <polygon
                strokeLinejoin="round"
                strokeMiterlimit="10"
                points="27.5,21.904 15,28.809  2.5,21.904 2.5,8.095 15,1.19 27.5,8.095 "
            />
        ),
        viewBox: `0 0 30 30`,
    },
}

interface SVGProps {
    stroke?: boolean
    color?: string | number | any
    width: number
    icon: 'triangle' | 'circle' | 'hexa' | 'box'
    zIndex?: number
    left: string
    top: string
    hiddenMobile?: boolean
    animation?: 'slow' | 'wide'
    horizontal?: boolean
}

const colour = () => {
    const [isDarkTheme, setIsDarkTheme] = useGlobalState('isDarkTheme')

    let colours = ['grey', 'teal', 'blue', 'green', 'purple']
    let numbers = [1, 2]

    let colour = Math.floor(Math.random() * 4)
    let number = Math.floor(Math.random() * 1)
    return `var(--${isDarkTheme ? 'dark-' : ''}${colours[colour]}-${
        numbers[number]
    })`
}

export const AnimatedSVG = ({
    stroke = false,
    color = colour(),
    zIndex = 0,
    width,
    icon,
    left,
    top,
    hiddenMobile = false,
    animation,
    horizontal,
}: SVGProps) => {
    return (
        <AnimatedBackground
            viewBox={icons[icon].viewBox}
            slow={animation === 'slow' ? true : false}
            large={animation === 'wide' ? true : false}
            horizontal={horizontal}
            stroke={stroke.toString()}
            colour={color}
            zIndex={zIndex}
            width={width}
            left={left}
            top={top}
            hiddenMobile={hiddenMobile}
        >
            {icons[icon].shape}
        </AnimatedBackground>
    )
}
