import styled from "styled-components";
import { LgTitle, MidTitle, SmallTitle } from "../../globalStyle/CommonLayout";

export const PageTitle = styled.h2`
  ${LgTitle}
  padding: 5.2rem 0;
  box-sizing: border-box;
  margin-bottom: 8.6rem;
  border-bottom: 1px solid black;
  @media all and (max-width: ${(props) => props.theme.tinySize}) {
    margin-bottom: 6.4rem;
  }
`;

export const SectionWrap = styled.section`
  margin-bottom: 8.6rem;
  a {
    text-decoration: underline;
    text-underline-position: under;
  }
  @media all and (max-width: ${(props) => props.theme.tinySize}) {
    margin-bottom: 9.2rem;
  }
`;

export const SubTitle = styled.h3`
  ${MidTitle}
  margin-bottom: 4rem;
`;

export const BlockTxt = styled.span`
  &::before {
    content: " ";
    display: inline-block;
    width: 0.3rem;
    height: 3.6rem;
    margin: 0 1.6rem -0.3rem;
    background-color: ${(props) => props.theme.black};
  }
  @media all and (max-width: ${(props) => props.theme.smSize}) {
    display: block;
    margin-top: 0.8rem;
    &::before {
      display: none;
    }
  }
`;

export const FlexWrap = styled.div`
  display: flex;
  gap: 8rem;
  margin-bottom: 2.4rem;
  @media all and (max-width: ${(props) => props.theme.tinySize}) {
    flex-direction: column;
    gap: 1.6rem;
  }
`;

export const ImgWrap = styled.div`
  width: 16rem;
  height: 21.2rem;
  flex-shrink: 0;
  border-radius: 2rem;
  overflow: hidden;
  background-color: ${(props) => props.theme.lightGrey};
  @media all and (max-width: ${(props) => props.theme.tinySize}) {
    width: 14rem;
    height: 18.4rem;
  }
`;

export const TxtWrap = styled.div`
  font-size: 1.6rem;
  line-height: 2;
  strong {
    font-weight: 700;
  }
`;

export const MainTxtBullet = styled.span`
  display: flex;
  gap: 0.8rem;
  &::before {
    content: "";
    width: 0.4rem;
    height: 0.4rem;
    margin-top: 1.4rem;
    flex-shrink: 0;
    border-radius: 50%;
    background-color: ${(props) => props.theme.black};
  }
`;

export const ContLabel = styled.span`
  ${SmallTitle}
  width:33%;
  flex-shrink: 0;
  line-height: 1.5;
  @media all and (max-width: ${(props) => props.theme.tinySize}) {
    width: 100%;
  }
`;

export const ParagraphTxt = styled(TxtWrap)`
  margin-bottom: 2.4rem;
`;
