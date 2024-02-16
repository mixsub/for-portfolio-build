import { Link, useNavigate } from "react-router-dom";
import { LayoutWrap } from "../../../globalStyle/CommonLayout";
import {
  PageHeader,
  HeaderWrap,
  MainLogo,
  GlobalNav,
  GlobalNavUl,
  GlobalNavMobileBtn,
  HistoryBtn,
  SROnlyText,
} from "./Style";
import LogoImg from "/assets/icon/logo.svg";
import DetailMenu from "../../DetailMenu/Index";
import { useState } from "react";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navigate = useNavigate();
  const pageBackHandler = () => {
    navigate(-1);
  };

  const toggleClick = () => {
    setToggleMenu((toggleMenu) => !toggleMenu);
  };

  return (
    <PageHeader>
      <LayoutWrap>
        <HeaderWrap>
          <MainLogo>
            <img src={LogoImg} alt="김미경의 포트폴리오 사이트" />
          </MainLogo>
          <GlobalNav>
            <GlobalNavUl>
              <li>
                <Link to="/">처음으로</Link>
              </li>
              <li>
                <Link to="/resume">이력서</Link>
              </li>
              <li>
                <Link to="/portfolio">포트폴리오</Link>
              </li>
            </GlobalNavUl>
            {toggleMenu ? <DetailMenu toggleMenu={toggleClick} /> : null}
            <GlobalNavMobileBtn onClick={toggleClick}>
              <div>
                <SROnlyText>숨김메뉴 열기</SROnlyText>
              </div>
            </GlobalNavMobileBtn>
          </GlobalNav>
          <HistoryBtn onClick={pageBackHandler}>
            <SROnlyText>뒤로가기 버튼</SROnlyText>
          </HistoryBtn>
        </HeaderWrap>
      </LayoutWrap>
    </PageHeader>
  );
};

export default Header;
