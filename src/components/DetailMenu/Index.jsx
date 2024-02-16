import { Link } from "react-router-dom";
import { LayoutWrap } from "../../globalStyle/CommonLayout";
import { MenuWrap, DetailMeunUl, CloseBtn } from "./Style";

const DetailMenu = ({ toggleMenu }) => {
  return (
    <MenuWrap>
      <LayoutWrap>
        <DetailMeunUl>
          <li>
            <Link to="/" onClick={toggleMenu}>
              처음으로
            </Link>
          </li>
          <li>
            <Link to="/resume" onClick={toggleMenu}>
              이력서
            </Link>
          </li>
          <li>
            <Link to="/portfolio" onClick={toggleMenu}>
              포트폴리오
            </Link>
          </li>
        </DetailMeunUl>
        <CloseBtn onClick={toggleMenu}></CloseBtn>
      </LayoutWrap>
    </MenuWrap>
  );
};

export default DetailMenu;
