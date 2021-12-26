/* style.ts
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

import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.article`
    padding: 0 0.5rem;
    margin-top: 80px;
    display: flex;
    transition: 0.5s background-color;
    color: #222222;
    background-color: #ffffff;
`

export const GlobalStyle = css`
    html,
    body {
        background-color: #FFFFFF;
        font-family: Inter, sans-serif;
        transition: 0.5s background-color;
        line-height: 1.7142857;
    }
    ::-webkit-scrollbar {
        color: transparent;
        background-color: transparent;
        transition: background-color 0.5s;
    }
    ::-webkit-scrollbar-thumb {
        background-color: rgba(
           0,0,0,
            0.48
        );
        border-radius: 8px;
        border: solid #FFFFFF;
        &:hover {
            background-color: rgba(
                0,0,0,
                0.68
            );
        }
    }
    ::-webkit-calendar-picker-indicator,
    input[type='checkbox'] {
        filter: ;
    }
    ::selection {
        background-color: #deeffd;
    }
    h1,
    h2,
    h3,
    h4,
    h5 {
        color: #222222;
        transition: color 0.5s;
        margin: 0;
    }
    p,
    label,
    input[type='datetime-local'] {
        color: #222222db;
        transition: color 0.5s;
    }
    a {
        color: #222222;
        text-decoration: none;
        transition: color 0.5s, opacity 0.2s;
    }
    a:hover {
        color: #222222;
        text-decoration: none;
        transition: color 0.5s;
        cursor: pointer;
        opacity: 0.7;
        text-decoration: none;
    }
    a:after {
        content: '';
        display: block;
        height: 1px;
        width: 0;
        background: transparent;
        transition: width 0.5s ease, background-color 0.5s ease;
        -webkit-transition: width 0.5s ease, background-color 0.5s ease;
        -moz-transition: width 0.5s ease, background-color 0.5s ease;
        margin: auto;
        text-decoration: none;
    }
    a:hover:after {
        width: 100%;
        background: #222222;
        text-decoration: none;
    }
    .noHover:hover {
        opacity: 1;
    }
    .noHover:hover:after {
        width: 0;
        background: #222222;
        text-decoration: none;
    }
    table {
        table-layout: auto;
        text-align: left;
        margin-top: 2em;
        margin-bottom: 2em;
        font-size: 0.875em;
    }
    tr {
        box-shadow: 0 2px 0 0 #22222240;
        -webkit-box-shadow: 0 2px 0 0
        #22222240;
        -moz-box-shadow: 0 2px 0 0 #22222240;
    }
    td {
        padding: 10px;
        @media screen and (max-width: 660px) {
            font-size: 10px;
        }
        @media screen and (max-width: 450px) {
            padding: 0;
            font-size: 8px;
        }
    }
    canvas {
        background-color: #eaeaea;
        cursor: pointer;
        width: 300px;
        height: 300px;
    }
`