import styled from 'styled-components'

export const StyledBlogHero = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    max-width: 1164px;
    @media print {
        display: none;
    }
    @media screen and (max-width: 400px) {
        flex-direction: column;
    }
`

export const InputContainer = styled.div`
    margin-left: 40px;
    --input-border: ${(props) => props.theme.ui.border};
    border: 1px solid var(--input-border);
    display: inline-flex;
    border-radius: 4px;
    transition: 0.5s border;
    &:focus-within,
    &:focus {
        --input-border: #8c8c8c !important;
    }
    @media screen and (max-width: 400px) {
        margin-left: 0;
        margin-top: 10px;
    }
`

export const InputIconContainer = styled.div`
    height: 42px;
    display: flex;
    flex-direction: column;
    width: 42px;
    align-items: center;
    justify-content: center;
    min-width: 42px;
    transition: 0.5s color;
    color: ${(props) => props.theme.colors.tertiary};
`

export const Input = styled.input`
    height: 41px;
    margin-top: 0.1px;
    outline: none;
    border: none;
    font-size: 14px;
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    width: inherit;
    background-color: transparent;
    transition: 0.5s color;
    color: ${(props) => props.theme.colors.tertiary};
    &::placeholder {
        transition: 0.5s color;
        color: ${(props) => props.theme.colors.tertiary + '87'};
    }
    @media screen and (max-width: 250px) {
        width: 80vw;
    }
`
