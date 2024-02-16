import { css } from "styled-components";

import SpoqaHanSansNeoRegular from "../fonts/SpoqaHanSansNeoRegular.woff";
import SpoqaHanSansNeoMedium from "../fonts/SpoqaHanSansNeoMedium.woff";
import SpoqaHanSansNeoBold from "../fonts/SpoqaHanSansNeoBold.woff";

export const fonts = css`
  @font-face {
    font-family: "Spoqa Han Sans Neo";
    font-weight: 400;
    src: local("SpoqaHanSansNeoRegular"),
      url(${SpoqaHanSansNeoRegular}) format("woff");
  }

  @font-face {
    font-family: "Spoqa Han Sans Neo";
    font-weight: 500;
    src: local("SpoqaHanSansNeoMedium"),
      url(${SpoqaHanSansNeoMedium}) format("woff");
  }

  @font-face {
    font-family: "Spoqa Han Sans Neo";
    font-weight: 700;
    src: local("SpoqaHanSansNeoBold"),
      url(${SpoqaHanSansNeoBold}) format("woff");
  }
`;
