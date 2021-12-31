/* components/Layouts/style.ts
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

import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { ChevronsDown } from 'react-feather'

export const StyledMainLayout = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - 80px);
    flex-direction: column;

    span {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 1rem;
    }
`

export const StyledMainHeader = styled.h1`
    line-height: 112px;
    font-size: 5rem;
    font-weight: 500;
    color: var(--colours-tertiary);
    width: fit-content;
    text-align: center;
    @media (min-width: 750px) {
        display: flex;
    }
    @media (max-width: 500px) {
        font-size: 3rem;
        line-height: 2.5rem;
    }
`

export const StyledMainSubheader = styled.h2`
    line-height: 48px;
    font-size: 1.5rem;
    font-weight: 300;
    color: var(--ui-colour);
    align-self: start;
    display: flex;
    width: fit-content;
    text-align: center;
    @media (max-width: 420px) {
        font-size: 1rem;
        line-height: 1.5rem;
    }
`

export const Bounce = keyframes`
    0% {
        transform: translate3d(0, 0px, 0);
    }
    100% {
        transform: translate3d(0, -5px, 0);
    }
`

export const StyledChevron = styled(ChevronsDown)`
    animation: ${Bounce} 1s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    bottom: 2rem;
    position: absolute;
    width: 2rem;
    height: 2rem;
`

export const RepositoriesGrid = styled.section`
    display: grid;
    gap: 10px;
    grid-auto-rows: 1fr;
    grid-template-columns: repeat(2, minmax(0px, 1fr));
    width: 100%;
    align-items: center;
    @media (max-width: 800px) {
        grid-template-columns: repeat(1, minmax(0px, 1fr));
    }
`

export const StyledWorkLayout = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    font-size: 18px;
    width: 100%;
    padding: 3rem 10vw;
    margin-bottom: 40px;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 18px;
    width: 80vw;
    margin-bottom: 40px;
    padding: 0 10vw;
    @media (min-width: 320px) {
        width: 100%;
    }
`

export const ContactGrid = styled.div`
    display: grid;
    grid-auto-flow: column;
    gap: 20px;
    margin: 1rem 0;
    @media screen and (max-width: 850px) {
        grid-auto-flow: row;
        align-items: center;
        justify-content: center;
    }
`

export const ContactSocialLink = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-right: 0;
    i {
        width: 20px;
        height: 20px;
        margin-right: 10px;
        margin-bottom: 5px;
        filter: invert(1);
        transition: opacity 0.5s ease 0s, filter 0.5s ease;
        &:hover {
            opacity: 0.6;
            cursor: pointer;
        }
    }
`
