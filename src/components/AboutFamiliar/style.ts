import styled from 'styled-components'

export const Tooltip = styled.span`
    margin: 0;
    padding: 0;
    position: relative;

    &:hover::after {
        padding: 3px 6px;
        background-color: ${(props) => props.theme.ui.secondaryBackground};
        content: attr(data-tooltip);
        position: absolute;
        z-index: 10;
        left: 0;
        bottom: 210%;
        width: max-content;
    }
`

export const Image = styled.img`
    width: 40px;
    height: 40px;
`

export const InvertImage = styled(Image)`
    filter: invert(${(props) => (props.theme.isDark ? 1 : 0)});
    transition: filter 0.5s ease;
`
