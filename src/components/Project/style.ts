import styled from 'styled-components'

export const StyledProject = styled.section`
    box-shadow: 0 0 10px 0 ${(props) => props.theme.colors.tertiary}A6;
    border-radius: 8px;
    overflow: hidden;
    background-color: ${(props) => props.theme.ui.secondaryBackground};
    margin: 10px 0 20px;
    width: 100%;
    max-width: 60vw;

    &:hover {
        opacity: 1;
        cursor: pointer;

        &::after {
            width: 0;
            background-color: ${(props) => props.theme.colors.tertiary};
            text-decoration: none;
        }
        transform: translateY(-5px);
        transition: 0.5s transform;
    }

    transition: 0.5s transform, 0.5s background-color;

    @media screen and (max-width: 768px) {
        max-width: 80vw;
    }
`

export const Container = styled.div`
    padding: 0 10px 10px 10px;
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 1024px) {
        flex-direction: column;
    }
`

export const NameContainer = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`

export const ProjectName = styled.span`
    display: flex;
    font-weight: 900;
    font-size: 50px;
    line-height: 52px;
    align-items: center;
    justify-content: center;
    transition: 0.5s color;
    @media only screen and (max-width: 1224px) {
        font-size: 40px;
        line-height: 3.5rem;
    }
    @media only screen and (max-width: 660px) {
        font-size: 20px;
        line-height: 2.5rem;
    }
`

export const ProjectDescription = styled.span`
    max-width: 710px;
    margin: 6px auto 6px auto;
    transition: 0.5s color;
    @media only screen and (max-width: 660px) {
        font-size: 12px;
    }
`

export const ProjectImage = styled.img`
    width: 100%;
    opacity: ${(props) => (props.theme.isDark ? '.75' : '100')};
    transition: box-shadow 0.5s, opacity 0.5s;
`

export const DiscontinuedPill = styled.span`
    border-radius: 8px;
    border: 1px solid rgba(217, 119, 6, 1);
    padding: 5px;
    line-height: 15px;
    font-size: 15px;
    color: rgba(217, 119, 6, 1);
    margin-left: 15px;
`

export const LanguagePill = styled.span`
    border: 1px solid ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.primary};
    display: inline-block;
    border-radius: 8px;
    padding: 0px 5px;
    font-size: 15px;
    margin-left: 15px;
    width: max-content;
    white-space: nowrap;
    height: min-content;
`
