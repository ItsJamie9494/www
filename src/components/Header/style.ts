/* components/Header/style.ts
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

import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const StyledHeader = styled.header`
    height: 80px;
    width: 100%;
    position: fixed;
    top: 0;
    transition: 0.5s background-color, 0.5s box-shadow;
    text-decoration: none;
    background-color: var(--ui-background);
    opacity: 0.9;
    z-index: 999999999;
    @media print {
        display: none;
    }
    ${({ isBlurred }: { isBlurred: boolean }) => css`
        box-shadow: ${isBlurred ? '0 0 10px 0' : ''}
            ${isBlurred ? 'rgba(225, 225, 225, .65)' : ''};
    `}
`
// TODO this should use a variable in box shadow, but it doesn't.

export const Container = styled.section`
    margin: 0px auto;
    max-width: 1164px;
    color: black;
    height: 80px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 0 15px;
    justify-content: space-between;
    text-decoration: none;
    a {
        font-size: 16px;
        text-decoration: none;
    }
`

export const Image = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 64px;
    margin: 0;
    transition: 0.5s transform;
    &:hover {
        transform: scale(1.1);
        cursor: pointer;
    }
`

export const LinkContainer = styled.section`
    display: grid;
    gap: 20px;
    grid-auto-flow: column;
    margin: 0 auto;
    transition: 0.5s opacity;
    color: var(--colours-tertiary);
    text-decoration: none;
    a:hover {
        transition: 0.5s opacity;
    }
    @media screen and (max-width: 600px) {
        display: none;
    }
`

// ${({ isBlurred }: { isBlurred: boolean }) => css`
//         opacity: ${isBlurred ? 0 : 1};
//         pointer-events: ${isBlurred ? 'none' : 'all'};
//         text-decoration: none;
//     `}

// export const DesktopButton = styled.span`
//     @media screen and (max-width: 600px) {
//         display: none;
//     }
// `

export const MobileButton = styled.div`
    @media screen and (min-width: 600px) {
        display: none;
    }

    button {
        border: none;
        background: none;
        cursor: pointer;
        transition: color 0.5s, opacity 0.2s;

        &:hover {
            color: var(--colours-tertiary);
            opacity: 0.7;
        }
    }
`

export const MobileContainer = styled.section`
    position: absolute;
    top: 80px;
    left: 0;
    background-color: var(--ui-background);
    transition: 0.5s background-color, 0.5s transform;
    width: 100%;
    z-index: 99;
    max-width: 100vw;

    ${({ isVisible }: { isVisible: boolean }) => css`
        transform: translateY(${isVisible ? '0%' : '-200%'});
    `}

    @media screen and (min-width: 830px) {
        display: none;
    }
`

export const MobileLinkContainer = styled.div`
    display: grid;
    gap: 0;
    grid-auto-flow: row;
    justify-content: center;

    a {
        padding: 1rem;
        text-align: center;
        &:hover {
            opacity: 0.6;
            transition: 0.5s opacity;
            cursor: pointer;
        }
        &:hover:after {
            width: 0;
            background: var(--colours-tertiary);
            text-decoration: none;
        }
    }
`
