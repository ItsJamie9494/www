import { css } from "@emotion/react"
import styled from "@emotion/styled"

export const StyledLink = styled.a`
    margin: 10px;
    &:hover {
        opacity: 1;
        &::after {
            width: 0;
            background: var(--colours-tertiary);
            text-decoration: none;
        }
        transform: translateY(-5px);
        transition: 0.5s transform;
    }
    transition: 0.5s transform;
`

export const StyledRepository = styled.div`
    display: flex;
    background-color: var(--ui-secondary-background);
    padding: 5px 10px;
    border-radius: 8px;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    justify-content: space-between;
    flex-direction: column;
`

export const TextContainer = styled.span`
    display: flex;
    flex-direction: column;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    ${({ discontinued }: { discontinued: boolean }) => css`
        color: ${discontinued
            ? 'rgba(217, 119, 6, 1)'
            : 'var(--colours-tertiary)'}
    `}
`

// export const HeaderContainer = styled.span`
//     text-overflow: ellipsis;
//     white-space: nowrap;
//     overflow: hidden;
//     display: flex;
//     align-items: center;
// `

export const HeaderText = styled.p`
    font-size: 24px;
    margin: 0;
    display: inline-flex;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 100%;
`

export const LanguagePill = styled.span`
    ${({ discontinued, colour }: { discontinued: boolean; colour: string }) => css`
        color: ${discontinued
            ? 'rgba(217, 119, 6, 1)'
            : colour};
        &:before {
            content: "";
            background-color: ${colour};
            color: ${colour};
            border-radius: 100%;
            width: 10px;
            height: 10px;
            display: inline-block;
            margin-right: .5rem;
        }
    `}
    display: inline-flex;
    border-radius: 8px;
    padding: 0px 5px;
    font-size: 15px;
    width: max-content;
    white-space: nowrap;
    justify-content: center;
    align-items: center;
`

export const Description = styled.span`
    overflow: hidden;
    max-width: 100%;
    text-overflow: ellipsis;
    font-size: 15px;
`

export const LowerContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    p {
        margin: 0;
    }
`

export const StarContainer = styled.span`
    display: flex;
    align-items: center;

    p {
        margin: 0;
    }
`