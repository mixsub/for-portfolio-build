import { styled } from "styled-components";
import { SROnly } from "../../../globalStyle/CommonLayout";
import GitHubIcon from "/assets/icon/github.png";
import EMailIcon from "/assets/icon/email.png";

export const PageFooter = styled.footer`
  width: 100%;
  margin-bottom: 2rem;
`;

export const FooterWrap = styled.div`
  position: relative;
  padding: 2.4rem;
  box-sizing: border-box;
  font-size: 1.2rem;
  background-color: rgba(${(props) => props.theme.pointYellowNum}, 0.2);
  clip-path: polygon(96.5% 0, 100% 27%, 100% 100%, 0 100%, 0 0);
  &::after {
    content: " ";
    position: absolute;
    top: 0;
    right: 0;
    width: 3.5%;
    height: 27%;
    background-color: rgba(${(props) => props.theme.pointYellowNum}, 0.2);
  }
  @media all and (max-width: ${(props) => props.theme.midSize}) {
    clip-path: polygon(94% 0, 100% 27%, 100% 100%, 0 100%, 0 0);
    &::after {
      width: 6%;
    }
  }
  @media all and (max-width: ${(props) => props.theme.tinySize}) {
    padding: 6rem 2.4rem;
    clip-path: polygon(90% 0, 100% 15%, 100% 100%, 0 100%, 0 0);
    &::after {
      width: 10%;
      height: 15%;
    }
  }
`;

export const FooterHead = styled.h2`
  width: 4rem;
  border-radius: 20%;
  overflow: hidden;
`;

export const TxtWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 4rem;
  margin-top: 4.8rem;
  @media all and (max-width: ${(props) => props.theme.tinySize}) {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`;

export const TxtCont = styled.div`
  & span {
    display: block;
    line-height: 1.4;
  }
  & span + span {
    margin-top: 0.8rem;
  }
`;

export const FlexWrap = styled.div`
  display: flex;
  gap: 1.6rem;
  @media all and (max-width: ${(props) => props.theme.tinySize}) {
    flex-direction: column;
    gap: 1.2rem;
  }
`;

export const SRTxt = styled.dt`
  ${SROnly}
`;

export const EmailTxt = styled.dd`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  &::before {
    content: " ";
    width: 1.2rem;
    height: 1.2rem;
    background-image: url(${EMailIcon});
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export const GitHubTxt = styled.dd`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  &::before {
    content: " ";
    width: 1.4rem;
    height: 1.4rem;
    background-image: url(${GitHubIcon});
    background-size: contain;
    background-repeat: no-repeat;
  }
`;
