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

import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { ChevronsDown } from "react-feather";

export const StyledMainLayout = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - 80px);
    flex-direction: column;
    
`

export const StyledMainHeader = styled.h1`
    line-height: 112px;
    font-size: 5rem;
    font-weight: 500;
    color: var(--colours-tertiary);
    @media only screen and (max-width: 1224px) {
        font-size: 3.5rem;
        line-height: 3.5rem;
    }
    @media only screen and (max-width: 400px) {
        font-size: 2.5rem;
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
    bottom: 1rem;
    position: absolute;
    width: 2rem;
    height: 2rem;
`