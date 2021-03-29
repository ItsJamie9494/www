import styled, { css } from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: .5s background-color;
  color: ${props => props.theme.colors.tertiary};
  background-color: ${props => props.theme.ui.background};
`;

export const GlobalStyle = css`
  html, body {
    background-color: ${props => props.theme.ui.background};
    font-family: Inter, sans-serif;
    transition: .5s background-color;
    line-height: 1.7142857;
  }
  
  ::-webkit-scrollbar {
    color: transparent;
    background-color: transparent;
    transition: background-color 0.5s;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(${props => props.theme.isDark ? '255,255,255' : '0,0,0'}, 0.48);
    border-radius: 8px;
    border: solid ${props => props.theme.ui.background};
    &:hover {
      background-color: rgba(${props => props.theme.isDark ? '255,255,255' : '0,0,0'}, 0.68);
    }
  }
  ::-webkit-calendar-picker-indicator, input[type="checkbox"] {
    filter: ${props => props.theme.isDark ? 'invert(1)' : ''};
  }
  ::selection {
    background-color: ${props => props.theme.isDark ? "#2b2b2b" : "#deeffd"};
  }
  
  h1, h2, h3, h4, h5 {
    color: ${props => props.theme.colors.tertiary};
    transition: color .5s;
    margin: 0;
  }
  
  p, label, input[type="datetime-local"] {
    color: ${props => props.theme.colors.tertiary + "db"};
    transition: color .5s;
  }
  
  a {
    color: ${props => props.theme.colors.tertiary};
    text-decoration: none;
    transition: color .5s, opacity .2s;
  }
  
  a:hover {
    color: ${props => props.theme.colors.tertiary};
    text-underline: none;
    transition: color .5s;
    cursor: pointer;
    opacity: 0.7;
    text-decoration: none;
  }

  a:after {
    content: '';
    display: block;
    height: 1px;
    width: 0;
    background: transparent;
    transition: width .5s ease, background-color .5s ease;
    -webkit-transition: width .5s ease, background-color .5s ease;
    -moz-transition: width .5s ease, background-color .5s ease;
    margin: auto;
    text-decoration: none;
  }
  
  a:hover:after {
    width: 100%;
    background: ${props => props.theme.colors.tertiary};
    text-decoration: none;
  }
  
  .noHover:hover {
    opacity: 1;
  }
  
  .noHover:hover:after {
    width: 0;
    background: ${props => props.theme.colors.tertiary};
    text-decoration: none;
  }
  
  table {
    table-layout: auto;
    text-align: left;
    margin-top: 2em;
    margin-bottom: 2em;
    font-size: .875em;
  }
  
  tr {
    box-shadow: 0 2px 0 0 ${props => props.theme.colors.tertiary}40;
    -webkit-box-shadow: 0 2px 0 0 ${props => props.theme.colors.tertiary}40;
    -moz-box-shadow: 0 2px 0 0 ${props => props.theme.colors.tertiary}40;
  }
  
  td {
    padding: 10px;
    @media screen and (max-width: 660px) {
      font-size: 10px;
    }
    @media screen and (max-width: 450px) {
      padding: 0;
      font-size: 8px;
    }
  }
  
  canvas {
    background-color: ${props => props.theme.ui.secondaryBackground};
    cursor: pointer;
    width: 300px;
    height: 300px;
  }
`
