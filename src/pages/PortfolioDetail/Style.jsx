import styled from "styled-components";
import { MidTitle, SmallTitle, SmallTxt } from "../../globalStyle/CommonLayout";

export const LayoutWrap = styled.div`
  position: relative;
  padding-top: 4rem;
  margin-bottom: 12rem;
  box-sizing: border-box;
`;

export const DetailSection = styled.section`
  max-width: 76rem;
`;

export const SectionTitle = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  ${MidTitle}
  margin-bottom: 8rem;
  line-height: 1.4;
  @media all and (max-width: ${(props) => props.theme.lgSize}) {
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
  @media all and (max-width: ${(props) => props.theme.tinySize}) {
    margin-bottom: 6.4rem;
  }
`;

export const OutLink = styled.div`
  & a {
    position: relative;
    ${SmallTitle}
    font-weight: 400;
    margin-left: 1.6rem;
  }
  & span::after {
    content: " ";
    display: block;
    position: absolute;
    left: 0;
    top: 90%;
    width: 100%;
    height: 0.4rem;
    background-color: ${(props) => props.theme.pointYellow};
  }
  @media all and (max-width: ${(props) => props.theme.lgSize}) {
    & a {
      margin-left: 0;
      margin-right: 1.6rem;
    }
  }
`;

export const InfoTxtWrap = styled.div`
  ${SmallTxt}
  position: absolute;
  top: 4rem;
  right: 0;
  width: 38rem;
  min-height: 56rem;
  padding: 4.2rem;
  box-sizing: border-box;
  line-height: 1.8;
  background-color: ${(props) => props.theme.lightYellow};
  box-shadow: -5px 5px 10px 0px rgba(0, 0, 0, 0.25);
  @media all and (max-width: ${(props) => props.theme.lgSize}) {
    position: relative;
    top: 0;
    width: 100%;
    min-height: auto;
  }
  @media all and (max-width: ${(props) => props.theme.tinySize}) {
    padding: 2.4rem;
  }
`;

export const InfoTxt = styled.p`
  margin-bottom: 4rem;
`;

export const InfoList = styled.ul`
  & li + li {
    margin-top: 0.8rem;
  }
  & li::before {
    content: " ";
    display: inline-block;
    width: 0.4rem;
    height: 0.4rem;
    margin: -0.4rem 0.4rem 0 0;
    border-radius: 50%;
    vertical-align: middle;
    background-color: ${(props) => props.theme.black};
  }
`;

export const DetailContTitle = styled.span`
  ${SmallTitle}
  display: block;
  margin: 9.2rem 0 2.4rem;
  &::before {
    content: " ";
    display: inline-block;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme.black};
    vertical-align: middle;
    margin: -0.4rem 0.4rem 0 0;
  }
  @media all and (max-width: ${(props) => props.theme.tinySize}) {
    margin: 4.8rem 0 2.4rem;
  }
`;
