import styled from 'styled-components'

export const StyledProject = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem 1.5rem;
    text-align: center;
    border-radius: 8px;
    width: 25vw;
    transition: 0.5s box-shadow;

    box-shadow: 0 0 10px 0 ${(props) => props.theme.colors.tertiary}A6;
`

export const Heading = styled.span`
    font-weight: 700;
    text-transform: uppercase;
    font-size: 16px;
    transition: color 0.5s;
    padding-bottom: 5px;
    @media only screen and (max-width: 660px) {
        font-size: 14px;
    }
`

export const ProjectName = styled.span`
    display: flex;
    font-weight: 900;
    font-size: 40px;
    line-height: 42px;
    align-items: center;
    justify-content: center;
    transition: color 0.5s;
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
    transition: color 0.5s;
    @media only screen and (max-width: 660px) {
        font-size: 12px;
    }
`

export const ProjectLink = styled.div`
    width: max-content;
    margin-top: 12px;
`

export const ProjectImage = styled.img`
    margin: 18px auto 0 auto;
    width: 5rem;
    height: 5rem;
    border-radius: 100px;
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
