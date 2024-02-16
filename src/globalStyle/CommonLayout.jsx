import styled, { css } from "styled-components";

export const PageWrap = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.mainBg};
`;

export const MainWrap = styled.main`
  width: 100%;
  flex: 1;
`;

export const LayoutWrap = styled.div`
  max-width: 132rem;
  margin: 0 auto;
  padding: 0 6.4rem;
  @media all and (max-width: ${(props) => props.theme.tinySize}) {
    padding: 0 1.6rem;
  }
`;

export const SROnly = css`
  position: absolute;
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`;

export const LgTitle = css`
  font-size: 5.6rem;
  font-weight: 500;
  text-transform: uppercase;
  @media all and (max-width: ${(props) => props.theme.midSize}) {
    font-size: 4.8rem;
  }
  @media all and (max-width: ${(props) => props.theme.tinySize}) {
    font-size: 3.4rem;
  }
`;

export const MidTitle = css`
  font-size: 4rem;
  font-weight: 500;
  line-height: 1.2;
  @media all and (max-width: ${(props) => props.theme.tinySize}) {
    font-size: 3rem;
  }
`;

export const SmallTitle = css`
  font-size: 2rem;
  font-weight: 500;
`;

export const SmallTxt = css`
  font-size: 1.4rem;
  strong {
    font-weight: 700;
  }
`;

export const Tag = styled.div`
  display: inline-block;
  margin: 0 0.8rem 0.8rem 0;
  padding: 0.2rem 0.8rem;
  box-sizing: border-box;
  text-align: center;
  border-radius: 0.8rem;
  background-color: ${(props) => props.theme.lightGrey};
`;
