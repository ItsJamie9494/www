/* components/Project/style.ts
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

export const StyledProject = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: unset;
    justify-content: unset;
    padding: 4rem 0;
    width: 100%;
    max-width: 100%;
    text-align: center;
    height: 100%;
`

export const ProjectName = styled.span`
    display: flex;
    font-weight: 500;
    font-size: 2rem;
    align-items: center;
    justify-content: center;
    transition: color 0.5s;
    @media only screen and (max-width: 1224px) {
        font-size: 2rem;
        line-height: 2.5rem;
    }
    @media only screen and (max-width: 660px) {
        font-size: 1rem;
        line-height: 1.5rem;
    }
`

export const ProjectDescription = styled.span`
    max-width: 710px;
    margin: 6px auto 6px auto;
    transition: color 0.5s;
    @media only screen and (max-width: 660px) {
        font-size: 12px;
    }
`

export const ProjectLinkRow = styled.div`
    display: grid;
    grid-auto-flow: column;
    gap: 30px;
    margin: 0 auto;
    align-items: center;
    justify-items: center;
    text-align: center;

    @media (max-width: 400px) {
        gap: 1px;
        grid-auto-flow: row;
    }
`

export const ProjectLink = styled.div`
    width: max-content;
    margin-top: 12px;
    font-size: 16px;
    letter-spacing: 0.3px;
    transition: 0.2s background-color, 0.2s opacity, 0.5s color;
    display: inline-flex;
    flex-direction: row;
    i {
        width: 24px;
        height: 24px;
        filter: invert(1);
        transition: opacity 0.5s ease 0s, filter 0.5s ease;
        margin: 0 10px;
    }
`

export const ProjectImage = styled.img`
    margin: 1rem auto;
    max-width: 70%;
    box-shadow: 0 0 10px 0 var(--colours-tertiary) A6;
    opacity: 0.75;
    transition: box-shadow 0.5s, opacity 0.5s;
`

// export const DiscontinuedPill = styled.span`
//     border-radius: 8px;
//     border: 1px solid rgba(217, 119, 6, 1);
//     padding: 5px;
//     line-height: 15px;
//     font-size: 15px;
//     color: rgba(217, 119, 6, 1);
//     margin-left: 15px;
// `
