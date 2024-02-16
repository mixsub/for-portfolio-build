import styled from "styled-components";
import { SROnly, LgTitle } from "../../globalStyle/CommonLayout";
import GreenTab from "/assets/icon/greenTab.png";
import YellowTab from "/assets/icon/yellowTab.png";
import RedTab from "/assets/icon/redTab.png";

export const PageTitle = styled.h2`
  ${LgTitle}
  margin: 5.2rem 0;
  @media all and (max-width: ${(props) => props.theme.midSize}) {
    margin: 6.4rem 0;
  }
  @media all and (max-width: ${(props) => props.theme.tinySize}) {
    margin: 7rem 0;
  }
`;

export const BlockTxt = styled.span`
  display: block;
  margin-bottom: 1.2rem;
`;

export const SectionWrap = styled.section`
  margin-bottom: 12rem;
`;

export const SROnlyTxt = styled.h3`
  ${SROnly}
`;

export const BtnList = styled.ul`
  display: flex;
  font-size: 1.6rem;
  font-weight: 700;
  li button {
    width: 20rem;
    height: 4.2rem;
    background-size: contain;
    background-repeat: no-repeat;
  }
  @media all and (max-width: ${(props) => props.theme.midSize}) {
    li button {
      width: 18rem;
      height: 3.8rem;
    }
  }
  @media all and (max-width: ${(props) => props.theme.tinySize}) {
    li button {
      width: 29.17vw;
      height: 6.12vw;
      font-size: 1.4rem;
    }
  }
`;

export const GreenBtn = styled.button`
  background-image: url(${GreenTab});
`;

export const YellowBtn = styled.button`
  background-image: url(${YellowTab});
`;

export const RedBtn = styled.button`
  background-image: url(${RedTab});
`;

export const ContentsWrap = styled.div`
  padding: 2.6rem;
  box-sizing: border-box;
  &[data-category="total"] {
    background-color: ${(props) => props.theme.pointGreen};
  }
  &[data-category="web"] {
    background-color: ${(props) => props.theme.pointYellow};
  }
  &[data-category="design"] {
    background-color: ${(props) => props.theme.pointRed};
  }
  @media all and (max-width: ${(props) => props.theme.tinySize}) {
    padding: 2.34vw;
  }
`;

export const ContentsList = styled.ul`
  min-height: 42rem;
  padding: 0 8.4rem;
  background-color: ${(props) => props.theme.mainBg};
  & > li {
    padding: 6.4rem 1rem;
    box-sizing: border-box;
    & + li {
      border-top: 1px solid black;
    }
  }
  @media all and (max-width: ${(props) => props.theme.midSize}) {
    padding: 0 6.2rem;
    & > li {
      padding: 4rem 1rem;
    }
  }
  @media all and (max-width: ${(props) => props.theme.tinySize}) {
    padding: 0 5.21vw;
    & > li {
      padding: 10.42vw 5.21vw;
    }
  }
`;
