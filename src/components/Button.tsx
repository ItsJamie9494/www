import styled, { css } from "styled-components";

export const Button = styled.div`
  ${({ shade, disabled }: { shade: 'blue' | 'white' | 'gray' | 'black' | 'red'; disabled?: boolean }) => css`
        background-color: ${shade == "blue" ? "#0070F3" : shade == "white" ? '#ffffff' : shade == "black" ? "black" : shade == "red" ? "#ff5d5d" : "#303030"};
        color: ${shade == "blue" || shade == "gray" ? "#fff" : shade == "black" ? "#EDEDED" : shade == "red" ? "#fff" : "#757575"};
        ${shade == "white" ? `
            box-shadow: 0 5px 10px rgba(0,0,0,0.12);
        ` : ''}
        border: 1px solid color: ${props => props.theme.ui.border};;
        &:hover {
            cursor: pointer;
            background-color: ${shade == "blue" ? "#0060D1" : shade == "gray" ? "#000000" : "#131313"};
            ${shade == "white" ? `
                box-shadow: 0 5px 10px rgba(0,0,0,0.22);
                
            ` : `
                box-shadow: 0 5px 10px rgba(0,0,0,0.05);
            `}
        }
        pointer-events: ${disabled ? 'none' : 'all'};
        opacity: ${disabled ? 0.5 : 1};
    `}
  border-radius: 4px;
  padding: 6px 18px;
  font-size: 16px;
  letter-spacing: 0.3px;
  transition: 0.2s background-color, 0.2s box-shadow, 0.3s transform, 0.2s border;
`;

export const HeroButton = styled(Button)`
    height: 50px;
    display: flex;
    vertical-align: middle;
    align-items: center;
`;

export const TextButton = styled.div`
    background-color: transparent;
    padding: 0px 12px;
    font-size: 16px;
    color: ${props => props.theme.colors.tertiary};
    letter-spacing: 0.3px;
    transition: 0.2s background-color, 0.2s opacity;
    &:hover {
        cursor: pointer;
        opacity: 0.7;
      text-decoration: none;
    }
    @media screen and (max-width: 800px) {
        & {
           padding: 0px 10px;
        }
    }
    ${({ isBasic }: { isBasic?: boolean }) => css`
        ${isBasic ? `
            
            display: inline-block;
            padding: 0;
            color: rgb(0, 112, 243);
            transition: 0.1s box-shadow;
            &:hover {
                opacity: 1;
            }
        ` : ''}
    `}
`;

export const IconButton = styled(TextButton)`
    display: flex;
    align-items: center;
    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
    color: ${props => props.theme.colors.tertiary};;
`;
