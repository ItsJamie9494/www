/* components/TextButton.tsx
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

export const TextButton = styled.div`
    background-color: transparent;
    padding: 0px 12px;
    font-size: 16px;
    letter-spacing: 0.3px;
    transition: 0.2s background-color, 0.2s opacity, 0.5s color;
    display: inline-flex;
    flex-direction: row;
    &:hover {
        cursor: pointer;
        opacity: 0.7;
        text-decoration: none;
    }
    @media screen and (max-width: 800px) {
        & {
            padding: 0px 10px;
        }
    }
    i {
        width: 24px;
        height: 24px;
        filter: invert(1);
        transition: opacity 0.5s ease 0s, filter 0.5s ease;
        margin: 0 10px;
    }
`
