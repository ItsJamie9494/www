import styled, { css } from 'styled-components'

export const PostMetadata = styled.div`
    border-top: 1px solid ${props => props.theme.ui.border};
    border-bottom: 1px solid ${props => props.theme.ui.border};
    -webkit-transition: 0.2s border;
    transition: 0.5s border;
    padding: 28px;
    max-width: 700px;
    margin-top: 20px;
    @media print {
      border-top: none;
      border-bottom: none;
      margin-top: 0;
      padding: 0;
    }
    h1 {
        text-align: center;
        font-size: 36px;
        font-weight: 600;
    }
    p {
        font-size: 16px;
        color: ${props => props.theme.colors.tertiary + "50"};
        margin: 0 auto;
    }
`

export const PostContainer = styled.article`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    @media only screen and (max-width: 1224px) {
      max-width: 80vw;
    }
`

export const PostContent = styled.section`
    color: ${props => props.theme.colors.tertiary};
    max-width: 1164px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    a {
        display: inline-block;
        color: ${props => props.theme.colors.primary};
        transition: 0.1s box-shadow ease;
    }
    h1 {
        font-size: 18px;
    }
    p {
        font-size: 16px;
        display: inline-block;
        flex-direction: column;
        flex-wrap: nowrap;
    }
    img {
        max-width: 90%;
        height: auto;
        opacity: ${props => props.theme.isDark ? '.75' : '100'};
        transition: opacity .5s;
    }
    figcaption {
        max-width: 650px;
        opacity: 0.5;
        font-size: 14px;
        margin: 0 auto;
    }
    ul, ol {
        text-align: left;
        list-style-position: inside;
        opacity: .86;
    }
    tt, code, pre {
        background-color: ${props => props.theme.isDark ? `#131313` : `#efefef`};
        transition: .5s background-color, .1s color;
        padding: 0.2em 4px;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        word-wrap: break-word;
        white-space : pre-wrap !important;
    }
    code {
      width: fit-content;
      display: inline;
    }
    code:before, code:after, tt:before, tt:after {
        display: none;
    }
    hr {
      width: 100%;
    }
    blockquote {
      border-left: 1px solid ${props => props.theme.secondaryBackground};
      padding-left: 10px;
    }
    .kg-gallery-row {
      display: grid;
      grid-auto-flow: column;
      align-items: center;
      img {
        object-fit: cover;
        width: 100%;
        max-height: 100%;
      }
    }
    .kg-bookmark-card {
      display: flex;
      background-color: ${props => props.theme.ui.secondaryBackground};
      transition: .5s background-color;
      border-radius: 8px;
      a:hover {
        opacity: 1;
      }
      a:hover:after {
        width: 0;
        background: ${props => props.theme.colors.tertiary};
        text-decoration: none;
      }
    .kg-bookmark-container {
      display: flex;
    }
    .kg-bookmark-content {
      display: flex;
      flex-direction: column;
      padding: 15px;
    }
    .kg-bookmark-title {
      color: ${props => props.theme.colors.tertiary};
      transition: .5s color;
    }
    .kg-bookmark-description {
      color: ${props => props.theme.colors.tertiary};
      transition: .5s color;
      font-size: 12px;
    }
    .kg-bookmark-metadata {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .kg-bookmark-icon {
      width: 20px;
      height: 20px;
      margin-right: 6px;
    }
    .kg-bookmark-author {
      text-overflow: ellipsis;
      overflow: hidden;
      max-width: 240px;
      white-space: nowrap;
      display: block;
      line-height: 1.65em;
      color: ${props => props.theme.colors.tertiary};
      transition: .5s color;
    }
    .kg-bookmark-thumbnail {
      margin: 0;
      padding: 0;
      position: relative;
      min-width: 33%;
      @media screen and (max-width: 500px) {
        display: none;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
      }
    }
`

export const PostImage = styled.img`
    width: 80vw;
    height: 60vw;
    max-height: 500px;
    max-width: 1000px;
    display: block;
    border-bottom: 1px solid ${props => props.theme.ui.border};
    margin-bottom: 2rem;
    transition: 0.2s border;
    ${({ image }: { image: any }) => css`
        background-image: url(${image});
        background-size: cover;
        background-position: center;
    `}
  
`
