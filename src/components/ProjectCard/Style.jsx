import styled from "styled-components";
import { MidTitle, SmallTxt } from "../../globalStyle/CommonLayout";

export const ContentsCard = styled.li`
  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.6rem;
  }
  @media all and (max-width: ${(props) => props.theme.midSize}) {
    a {
      flex-direction: column;
      gap: 8rem;
    }
  }
  @media all and (max-width: ${(props) => props.theme.tinySize}) {
    a {
      gap: 5.2rem;
    }
  }
`;

export const CardTxtWrap = styled.div``;

export const CardImgWrap = styled.div`
  position: relative;
  width: 30rem;
  height: 30rem;
  flex-shrink: 0;
  border-radius: 50%;
  overflow: hidden;
  background-color: ${(props) => props.theme.lightGrey};
  &::after {
    content: " ";
    position: absolute;
    inset: 0;
    background-color: rgba(${(props) => props.theme.blackNum}, 0.2);
  }
  img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  @media all and (max-width: ${(props) => props.theme.midSize}) {
    order: -1;
  }
  @media all and (max-width: ${(props) => props.theme.tinySize}) {
    width: 49.48vw;
    height: 49.48vw;
  }
`;

export const InfoTxt = styled.span`
  ${SmallTxt}
  display: block;
  line-height: 1.2;
  @media all and (max-width: ${(props) => props.theme.tinySize}) {
    line-height: 1.6;
  }
`;

export const CardTitle = styled.h4`
  ${MidTitle}
  position: relative;
  margin-bottom: 2rem;
  @media all and (max-width: ${(props) => props.theme.midSize}) {
    text-align: center;
  }
  @media all and (max-width: ${(props) => props.theme.tinySize}) {
    margin-bottom: 1.2rem;
  }
`;

export const DateTxt = styled(InfoTxt)`
  display: inline-block;
  &::before {
    content: " ";
    display: inline-block;
    width: 1px;
    height: 10px;
    margin: 0 0.8rem;
    background-color: ${(props) => props.theme.black};
  }
  @media all and (max-width: ${(props) => props.theme.midSize}) {
    display: block;
    margin-top: 0.8rem;
    &::before {
      display: none;
    }
    text-align: center;
  }
  @media all and (max-width: ${(props) => props.theme.tinySize}) {
    margin-top: 0rem;
  }
`;

export const SummaryTxt = styled(InfoTxt)`
  display: inline-block;
  @media all and (max-width: ${(props) => props.theme.midSize}) {
    display: block;
    text-align: center;
  }
`;

export const TxtWrap = styled.div`
  ${InfoTxt} {
    margin-bottom: 0.8rem;
  }
  margin: 5.2rem 0 2rem;
  ${InfoTxt}::before {
    content: " ";
    display: inline-block;
    width: 0.4rem;
    height: 0.4rem;
    margin: -0.4rem 0.4rem 0 0;
    border-radius: 50%;
    overflow: hidden;
    background-color: ${(props) => props.theme.black};
    vertical-align: middle;
  }
  @media all and (max-width: ${(props) => props.theme.midSize}) {
    margin: 4rem 0 2rem;
  }
  @media all and (max-width: ${(props) => props.theme.tinySize}) {
    margin: 3.2rem 0 2rem;
    ${InfoTxt} {
      margin-bottom: 0.2rem;
    }
  }
`;

export const CardTxtList = styled.ul`
  display: flex;
  gap: 4rem;
  li {
    ${InfoTxt} {
      margin-bottom: 0.6rem;
    }
  }
  @media all and (max-width: ${(props) => props.theme.midSize}) {
    justify-content: space-between;
  }
  @media all and (max-width: ${(props) => props.theme.tinySize}) {
    flex-direction: column;
    gap: 0.8rem;
    li {
      ${InfoTxt} {
        margin-bottom: 0rem;
      }
    }
  }
`;
