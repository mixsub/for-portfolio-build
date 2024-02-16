import styled from "styled-components";
import Clip from "/assets/icon/clip.png";
import NameCard from "/assets/icon/name.png";
import FileCover from "/assets/icon/fileCover.png";

export const LayoutWrap = styled.div`
  display: flex;
  align-items: center;
  max-width: 144rem;
  height: 100vh;
  margin: 0 auto;
  padding: 4.8rem;
  box-sizing: border-box;
  @media all and (max-width: ${(props) => props.theme.lgSize}) {
    padding: 3.33vw;
  }
  @media all and (max-width: ${(props) => props.theme.tinySize}) {
    padding: 1.67vw;
  }
`;

export const HomeNav = styled.nav`
  position: relative;
`;

export const HomeImgWrap = styled.div`
  position: absolute;
`;

export const HomeNavUl = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  padding: 2.4rem 2.4rem 4rem 6rem;
  @media all and (max-width: ${(props) => props.theme.lgSize}) {
    padding: 1.67vw 1.67vw 2.78vw 4.17vw;
  }
  li {
    width: 45%;
    background-color: ${(props) => props.theme.mainBg};
    img {
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }
  }
`;

export const HomeNavResume = styled.li`
  position: relative;
  &::before {
    content: " ";
    display: block;
    position: absolute;
    z-index: 1;
    width: 8%;
    height: 8%;
    top: 45%;
    left: -3.8%;
    background-image: url(${Clip});
    background-size: contain;
    background-repeat: no-repeat;
  }
  &::after {
    content: " ";
    display: block;
    position: absolute;
    width: 28.7%;
    height: 30%;
    left: -1%;
    top: 35%;
    background-image: url(${NameCard});
    background-size: contain;
    background-repeat: no-repeat;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
  }
  & img:hover {
    transform: translateX(8%);
    transition: all ease-in-out 500ms;
  }
`;

export const HomeNavPortfolio = styled.li`
  position: relative;
  &::after {
    content: " ";
    display: block;
    position: absolute;
    width: 74%;
    height: 37%;
    right: -2%;
    bottom: -2%;
    background-image: url(${FileCover});
    background-size: contain;
    background-repeat: no-repeat;
  }
  & img:hover {
    transform: translateX(-10%) rotate(-2deg);
    transition: all ease-in-out 500ms;
  }
`;
