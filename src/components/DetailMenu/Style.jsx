import styled from "styled-components";
import { MidTitle } from "../../globalStyle/CommonLayout";

export const MenuWrap = styled.nav`
  display: none;
  @media all and (max-width: ${(props) => props.theme.smSize}) {
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    min-width: 100vw;
    min-height: 100vh;
    background-color: ${(props) => props.theme.mainBg};
  }
`;

export const DetailMeunUl = styled.ul`
  ${MidTitle}
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  li {
    padding: 1.2rem 2rem;
  }
  & > li + li {
    margin-top: 4rem;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  width: 4rem;
  height: 4.2rem;
  right: 8.6rem;
  top: 2.4rem;
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 0.2rem;
    background-color: black;
    border-radius: 0.4rem;
    transform: rotate(45deg);
  }
  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 0.2rem;
    background-color: black;
    border-radius: 0.4rem;
    transform: rotate(-45deg);
  }
  @media all and (max-width: ${(props) => props.theme.tinySize}) {
    width: 5.21vw;
    height: 5.47vw;
    right: 3.8rem;
    top: 4.17vw;
  }
`;
