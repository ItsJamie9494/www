import styled from 'styled-components'

export const StyledBlogEnding = styled.div`
    text-align: center;
    max-width: 700px;
    padding: 80px 0;
    font-weight: 700;
    display: grid;
    margin: 0;
    transition: 0.5s color;
    color: ${(props) => props.theme.colors.tertiary};
`

export const MainText = styled.div`
    font-size: 24px;
`

export const SubText = styled.div`
    font-size: 16px;
`
