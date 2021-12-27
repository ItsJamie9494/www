/* components/AboutFamiliarList/style.ts
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

export const Tooltip = styled.span`
    margin: 0;
    padding: 0;
    position: relative;
    &:hover::after {
        padding: 3px 6px;
        background-color: var(--ui-secondary-background);
        content: attr(data-tooltip);
        position: absolute;
        z-index: 10;
        left: 0;
        top: -75%;
        width: max-content;
    }
    width: fit-content;
`

export const Image = styled.img`
    width: 40px;
    height: 40px;
`

export const InvertImage = styled(Image)`
    filter: invert(1);
    transition: filter 0.5s ease;
`

export const StyledList = styled.section`
    h4 {
        margin: 1rem 0 0;
    }
    div {
        display: grid;
        grid-auto-rows: 1fr;
        grid-template-columns: repeat(auto-fit, minmax(5rem, 0.1fr));
        align-items: start;
        width: 100%;
    }
`
