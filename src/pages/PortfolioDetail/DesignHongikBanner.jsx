import { Helmet } from "react-helmet-async";
import ProjectContents from "../../components/ProjectContents/Index";
import {
  LayoutWrap,
  DetailSection,
  DetailContTitle,
  SectionTitle,
  InfoTxtWrap,
  InfoTxt,
  InfoList,
} from "./Style";
import DetailImg1 from "/assets/img/detail_FAQ_1.png";
import DetailImg2 from "/assets/img/detail_FAQ_2.png";
import DetailImg3 from "/assets/img/detail_FAQ_3.jpg";

const DesignHongikBanner = () => {
  return (
    <>
      <Helmet>
        <title>
          바이오헬스 혁신공유대학 FAQ 디자인 | 김미경의 포트폴리오 사이트
        </title>
      </Helmet>
      <LayoutWrap>
        <DetailSection>
          <SectionTitle>
            홍익대학교
            <br />
            바이오헬스 혁신공유대학 FAQ
          </SectionTitle>
          <InfoTxtWrap>
            <InfoTxt>
              새롭게 제작된 홍익대학교 바이오헬스 혁신공유대학 웹사이트에 사용될
              FAQ 배너를 디자인했습니다.
            </InfoTxt>
            <InfoList>
              <li>
                학교 상징색과 인접색상을 포인트 컬러로 배치, 강조될 텍스트에는
                채도 높은 포인트 컬러 활용
              </li>
              <li>
                배너 중간마다 각 파트의 위치를{" "}
                <strong>구분할 수 있는 불릿형태의 아이콘</strong> 삽입
              </li>
              <li>
                친근한 느낌을 위해 질문에 대답하는{" "}
                <strong>채팅과 같은 형식의 레이아웃</strong>을 활용
              </li>
            </InfoList>
          </InfoTxtWrap>
          <DetailContTitle>사용된 그래픽</DetailContTitle>
          <ProjectContents detailImg={DetailImg1} detailTxt="컬러 구성" />
          <ProjectContents
            detailImg={DetailImg2}
            detailTxt="불릿형태의 아이콘"
          />
          <DetailContTitle>전체 배너</DetailContTitle>
          <ProjectContents
            detailImg={DetailImg3}
            detailTxt="최종 제작된 배너 이미지"
          />
        </DetailSection>
      </LayoutWrap>
    </>
  );
};

export default DesignHongikBanner;
