import styled, { css } from 'styled-components';
import Link from "next/link";

export const StyledHeader = styled.div`
    height: 80px;
    width: 100%;
    position: absolute;
    top: 0;
    transition: 0.3s background-color, 0.3s box-shadow;
    text-decoration: none;
    backdrop-filter: blur(8px);
    background-color: rgb(${props => props.theme.ui.secondary} / 69%);
    z-index: 999999999;
    ${(( isBlurred ) => css`
      box-shadow: ${isBlurred ? `0 0.5px 3.6px 0 rgba(255,255,255,.132), 0 0.3px 0.9px 0 rgba(255,255,255,.108)` : ''};
    `)}
    @media print {
      display: none;
    }
`;

export const Container = styled.div`
  margin: 0px auto;
  max-width: 1164px;
  color: black;
  height: 80px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 15px;
  justify-content: space-between;
  text-decoration: none;
  a {
    font-size: 16px;
    text-decoration: none;
  }
`;

export const Image = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 64px;
  margin: 0;
  transition: 0.3s transform;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const LinkContainer = styled.div`
  display: grid;
  gap: 20px;
  grid-auto-flow: column;
  margin: 0 auto;
  transition: 0.3s opacity;
  color: ${props => props.theme.colors.tertiary};
  text-decoration: none;
  ${({ isBlurred }: { isBlurred: boolean }) => css`
    opacity: ${isBlurred ? 0 : 1};
    pointer-events: ${isBlurred ? 'none' : 'all'};
    text-decoration: none;
  `}
  a:hover {
    transition: 0.3s opacity;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const DesktopButton = styled.span`
  @media screen and (max-width: 600px) {
    display: none;
  }
`

export const Dropdown = styled.div`
  @media screen and (min-width: 600px) {
    display: none;
  }
`

export const MobileContainer = styled.div`
  position: absolute;
  top: 80px;
  ${({ isVisible }: { isVisible: boolean }) => css`
    transform: translateY(${isVisible ? '0%' : '-200%'});
  `}
  left: 0;
  background-color: ${props => props.theme.ui.background};
  transition: .5s background-color, .5s transform;
  width: 100%;
  z-index: 0;
`

export const MobileLinkContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  gap: 0;
`

export const MobileLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  &:hover {
    opacity: 0.6;
    transition: .5s opacity;
    cursor: pointer;
  }
`
