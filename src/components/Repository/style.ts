import styled, { css } from 'styled-components'

export const StyledRepository = styled.div`
    display: flex;
    background-color: ${(props) => props.theme.ui.secondaryBackground};
    padding: 5px 10px;
    margin: 10px;
    border-radius: 8px;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    justify-content: space-between;
`

export const TextContainer = styled.span`
    display: flex;
    flex-direction: column;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`

export const HeaderContainer = styled.span`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: flex;
    align-items: center;
`

export const HeaderText = styled.p`
    font-size: 24px;
    margin: 0;
    display: inline-flex;
`

export const LanguagePill = styled.span`
    ${({ discontinued }: { discontinued: boolean }) => css`
        border: 1px solid
            ${discontinued
                ? 'rgba(217, 119, 6, 1)'
                : (props) => props.theme.colors.primary};
        color: ${discontinued
            ? 'rgba(217, 119, 6, 1)'
            : (props) => props.theme.colors.primary};
    `}
    display: inline-block;
    border-radius: 8px;
    padding: 0px 5px;
    font-size: 15px;
    margin-left: 15px;
    width: max-content;
    white-space: nowrap;
`

export const Description = styled.span`
    overflow: hidden;
    max-width: 100%;
    text-overflow: ellipsis;
    font-size: 15px;
`

export const StarContainer = styled.span`
    display: flex;
    align-items: center;
`
