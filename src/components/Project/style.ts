import styled from 'styled-components';

export const StyledProject = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: unset;
  justify-content: unset;
  padding: 1rem 0;
  text-align: center;
  box-shadow: 0 0.5px 3.6px 0 rgba(${props => props.theme.isDark ? '255,255,255' : '0,0,0'},.132), 0 0.3px 0.9px 0 rgba(${props => props.theme.isDark ? '255,255,255' : '0,0,0'},.108);
`;

export const Heading = styled.span`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 16px;
  transition: color .5s;
  padding-bottom: 5px;
  @media only screen and (max-width: 660px) {
    font-size: 14px;
  }
`;

export const ProjectName = styled.span`
  display: flex;
  font-weight: 900;
  font-size: 40px;
  line-height: 42px;
  align-items: center;
  justify-content: center;
  transition: color .5s;
  @media only screen and (max-width: 1224px) {
    font-size: 40px;
    line-height: 3.5rem;
  }
  @media only screen and (max-width: 660px) {
    font-size: 20px;
    line-height: 2.5rem;
  }
`;

export const ProjectDescription = styled.span`
  max-width: 710px;
  margin: 6px auto 6px auto;
  transition: color .5s;
  @media only screen and (max-width: 660px) {
    font-size: 12px;
  }
`;

export const ProjectLink = styled.div`
  width: max-content;
  margin-top: 12px;
`;

export const ProjectImage = styled.img`
  margin: 18px auto 0 auto;
  max-width: 50%;
  box-shadow: 0 0 10px 0 ${props => props.theme.colors.tertiary}A6;
  opacity: ${props => props.theme.isDark ? '.75' : '100'};
  transition: box-shadow .5s, opacity .5s;
`;

export const DiscontinuedPill = styled.span`
  border-radius: 8px;
  border: 1px solid rgba(217, 119, 6, 1);
  padding: 5px;
  line-height: 15px;
  font-size: 15px;
  color: rgba(217, 119, 6, 1);
  margin-left: 15px;
`;
