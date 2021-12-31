/* components/Footer/style.ts
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

export const StyledFooter = styled.div`
    height: 6rem;
    width: 100%;
    text-decoration: none;
    backdrop-filter: blur(8px);
    background-color: rgb(0 0 0 / 69%);
    background-color: var(--ui-secondary-background);
    @media print {
        display: none;
    }
    transition: background-color 0.5s;
    position: relative;
    margin-top: 3rem;

    &::before {
        width: 0;
        height: 0;
        border-bottom: 3rem solid var(--ui-secondary-background);
        border-left: 50vw solid transparent;
        border-right: 49vw solid transparent;
        content: '';
        position: absolute;
        top: -3rem;
    }

    @media (min-width: 320px) {
        height: fit-content;
    }
`

export const Container = styled.div`
    margin: 0px auto;
    max-width: 1164px;
    color: black;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 15px;
    justify-content: space-between;
    width: 100%;
    text-decoration: none;
    a {
        font-size: 16px;
        text-decoration: none;
    }
    i {
        width: 24px;
        height: 24px;
        filter: invert(1);
        transition: opacity 0.5s ease 0s, filter 0.5s ease;
        &:hover {
            opacity: 0.6;
            cursor: pointer;
        }
    }
    @media screen and (min-width: 320px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

export const Image = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 64px;
    margin: 0 20px 0 0;
    transition: 0.5s transform;
    &:hover {
        transform: scale(1.1);
        cursor: pointer;
    }
    @media screen and (min-width: 320px) {
        margin: 0;
    }
`

export const RightContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    @media screen and (max-width: 800px) {
        margin-top: 1rem;
        flex-direction: column;
        align-items: center;
        justify-items: center;
        gap: 0;
    }
`

export const CopyrightContainer = styled.p`
    display: grid;
    gap: 20px;
    grid-auto-flow: column;
    transition: 0.5s opacity;
    color: var(--colours-tertiary);
    text-decoration: none;
    @media screen and (max-width: 800px) {
        margin-bottom: 20px;
        align-items: center;
        text-align: center;
        gap: 0;
        margin: 0;
    }
`

export const EggToast = styled.span`
    width: max-content;
    height: auto;
    margin: 0 auto;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 10px;
    background-color: var(--colours-tertiary);
    color: var(--colours-secondary);
    font-size: 15px;
    padding: 15px 40px 15px 40px;
    text-align: center;
    border-radius: 25px;
    opacity: 0.7;
    z-index: 999999;
    @media screen and (max-width: 660px) {
        display: none; // too lazy to bother programming this for tiny screens
    }
`
