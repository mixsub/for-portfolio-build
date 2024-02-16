import { Link } from "react-router-dom";
import { GlobalStyle } from "../../globalStyle/GlobalStyle";
import {
  LayoutWrap,
  HomeNav,
  HomeImgWrap,
  HomeNavUl,
  HomeNavResume,
  HomeNavPortfolio,
} from "./Style";
import ResumeBg from "/assets/icon/resume.png";
import Portfolio from "/assets/icon/portfolio.png";
import DocumentBg from "/assets/icon/document.png";

const Home = () => {
  return (
    <>
      <GlobalStyle />
      <LayoutWrap>
        <HomeNav>
          <HomeImgWrap>
            <img src={DocumentBg} alt="이력서와 포트폴리오를 담은 종이 파일" />
          </HomeImgWrap>
          <HomeNavUl>
            <HomeNavResume>
              <Link to="/resume">
                <img src={ResumeBg} alt="이력서" />
              </Link>
            </HomeNavResume>
            <HomeNavPortfolio>
              <Link to="/portfolio">
                <img src={Portfolio} alt="포트폴리오" />
              </Link>
            </HomeNavPortfolio>
          </HomeNavUl>
        </HomeNav>
      </LayoutWrap>
    </>
  );
};

export default Home;
