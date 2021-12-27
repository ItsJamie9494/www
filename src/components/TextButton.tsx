import { css } from "@emotion/react";
import styled from "@emotion/styled";

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