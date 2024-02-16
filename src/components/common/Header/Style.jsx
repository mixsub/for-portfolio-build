import styled from "styled-components";
import { SROnly } from "../../../globalStyle/CommonLayout";
import backArrow from "/assets/icon/backArrow.png";

export const PageHeader = styled.header`
  width: 100%;
`;

export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 2.4rem 0;
  border-bottom: 1px solid black;
  @media all and (max-width: ${(props) => props.theme.midSize}) {
    padding: 1.6rem 0;
  }
  @media all and (max-width: ${(props) => props.theme.tinySize}) {
    /* padding: 2.08vw 0; */
    padding: 0.8rem;
  }
`;

export const MainLogo = styled.h1`
  width: 7.4rem;
  height: 7rem;
  margin-left: 50%;
  transform: translateX(-100%);
  border-radius: 20%;
  overflow: hidden;
  @media all and (max-width: ${(props) => props.theme.midSize}) {
    width: 6.4rem;
    height: 6rem;
  }
  @media all and (max-width: ${(props) => props.theme.tinySize}) {
    /* width: 8.33vw;
    height: 7.81vw; */
    width: 4.4rem;
    height: 4.4rem;
  }
`;

export const GlobalNav = styled.nav`
  margin-left: auto;
  margin-right: 2.4rem;
  @media all and (max-width: ${(props) => props.theme.smSize}) {
    margin-right: 0.8rem;
  }
`;

export const GlobalNavUl = styled.ul`
  display: flex;
  gap: 4rem;
  align-items: center;
  font-size: 1.8rem;
  @media all and (max-width: ${(props) => props.theme.smSize}) {
    display: none;
  }
`;

export const GlobalNavMobileBtn = styled.button`
  position: relative;
  display: none;
  width: 4rem;
  height: 4.2rem;
  div {
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: black;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    border-radius: 0.4rem;
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: black;
    top: 1rem;
    right: 0;
    border-radius: 0.4rem;
  }
  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: black;
    bottom: 1rem;
    right: 0;
    border-radius: 0.4rem;
  }

  @media all and (max-width: ${(props) => props.theme.smSize}) {
    display: block;
  }
  @media all and (max-width: ${(props) => props.theme.tinySize}) {
    width: 5.21vw;
    height: 5.47vw;
    &::after {
      top: 1.3vw;
    }
    &::before {
      bottom: 1.3vw;
    }
  }
`;

export const HistoryBtn = styled.button`
  width: 3rem;
  height: 2rem;
  order: -1;
  padding: 2rem 1rem;
  box-sizing: border-box;
  background-image: url(${backArrow});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  @media all and (max-width: ${(props) => props.theme.tinySize}) {
    width: 3.91vw;
    height: 2.6vw;
  }
`;

export const SROnlyText = styled.span`
  ${SROnly}
`;
