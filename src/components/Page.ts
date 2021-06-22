import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 18px;
    width: 80vw;
    margin-bottom: 40px;
`

export const CenteredElement = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const RepositoriesGrid = styled.section`
    display: grid;
    gap: 10px;
    grid-auto-rows: 1fr;
    grid-template-columns: repeat(2, minmax(0px, 1fr));
    width: 100%;
    align-items: center;
`

export const ContactGrid = styled.div`
    display: grid;
    grid-auto-flow: column;
    gap: 20px;
    margin-bottom: 20px;
    @media screen and (max-width: 850px) {
        grid-auto-flow: row;
        align-items: center;
        justify-content: center;
    }
`

export const ContactSocialLink = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-right: 0;
    i {
        width: 20px;
        height: 20px;
        margin-right: 10px;
        margin-bottom: 5px;
        filter: invert(${(props) => (props.theme.isDark ? 1 : 0)});
        transition: opacity 0.5s ease 0s, filter 0.5s ease;
        &:hover {
            opacity: 0.6;
            cursor: pointer;
        }
    }
`
