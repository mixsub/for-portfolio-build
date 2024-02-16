import { Link } from "react-router-dom";
import { LayoutWrap } from "../../../globalStyle/CommonLayout";
import {
  PageFooter,
  FooterWrap,
  FooterHead,
  SRTxt,
  TxtWrap,
  TxtCont,
  FlexWrap,
  EmailTxt,
  GitHubTxt,
} from "./Style";
import LogoImg from "/assets/icon/logo.svg";

const Footer = () => {
  return (
    <PageFooter>
      <LayoutWrap>
        <FooterWrap>
          <FooterHead>
            <img src={LogoImg} alt="김미경의 포트폴리오 사이트" />
          </FooterHead>
          <TxtWrap>
            <TxtCont>
              <span>김미경의 작업물들로 제작된 포트폴리오 사이트입니다.</span>
              <span>
                Copyright 2024. Kim Migyeong All contents cannot be copied
                without permission.
              </span>
            </TxtCont>
            <FlexWrap>
              <dl>
                <SRTxt>이메일</SRTxt>
                <EmailTxt>migyeong0211@gmail.com</EmailTxt>
              </dl>
              <dl>
                <SRTxt>GitHub</SRTxt>
                <GitHubTxt>
                  <Link to="https://github.com/mixnuts211" target="_blank">
                    @mixnuts211
                  </Link>
                </GitHubTxt>
              </dl>
            </FlexWrap>
          </TxtWrap>
        </FooterWrap>
      </LayoutWrap>
    </PageFooter>
  );
};

export default Footer;
