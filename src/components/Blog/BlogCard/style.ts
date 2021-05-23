import styled from 'styled-components'

export const ReadMore = styled.figure`
    padding-bottom: 40px;
    transition: 0.5s color;
    display: flex;
    cursor: pointer;
    color: ${(props) => props.theme.colors.tertiary + 90};
    span {
        font-size: 12px;
        padding-left: 12px;
        font-weight: 600;
        margin-top: -2px;
        letter-spacing: 0.5px;
    }
    &:hover {
        color: #0070f3 !important;
    }
`

export const StyledBlogCard = styled.div`
    display: block;
    max-width: 700px;
    width: 80vw;
    padding: 40px 16px 0;
    box-shadow: 0 1px #eaeaea;
    cursor: pointer;
    &:hover ${ReadMore} {
        color: #0070f3 !important;
    }
    a:after {
        width: 0;
        background: transparent;
    }
    a:hover:after {
        width: 0;
        background: transparent;
        text-decoration: none;
    }
`

export const CardDate = styled.div`
    font-size: 14px;
    opacity: 0.8;
    padding-bottom: 0.8rem;
    transition: 0.5s color;
    color: ${(props) => props.theme.colors.tertiary};
    cursor: pointer;
`

export const CardTitle = styled.h1`
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 1rem;
    display: inline-block;
    transition: 0.1s border-bottom, 0.5s color;
    border-bottom: 1px solid #00000000;
    cursor: pointer;
`

export const CardDescription = styled.div`
    font-size: 15px;
    opacity: 0.7;
    padding-bottom: 1.5rem;
    transition: 0.5s color;
    color: ${(props) => props.theme.colors.tertiary};
    cursor: pointer;
`

export const CardContainerLink = styled.a``
