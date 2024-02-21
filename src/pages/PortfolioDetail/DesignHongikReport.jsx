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
import DetailImg1 from "/assets/img/detail_3_1.png";
import DetailImg2 from "/assets/img/detail_3_2.png";
import DetailImg3 from "/assets/img/detail_3_3.png";
import DetailImg4 from "/assets/img/detail_3_4.jpg";
import DetailImg5 from "/assets/img/detail_3_5.jpg";
import DetailImg6 from "/assets/img/detail_3_6.jpg";
import DetailImg7 from "/assets/img/detail_3_7.jpg";
import DetailImg8 from "/assets/img/detail_3_8.jpg";

const DesignHongikReport = () => {
  return (
    <>
      <Helmet>
        <title>
          미술활동보고서 작성 안내 디자인 | 김미경의 포트폴리오 사이트
        </title>
      </Helmet>
      <LayoutWrap>
        <DetailSection>
          <SectionTitle>
            홍익대학교 미술활동보고서 <br />
            작성 안내
          </SectionTitle>
          <InfoTxtWrap>
            <InfoTxt>
              홍익대학교의 21학년도 미술 활동 보고서를 준비하는 학생들에게 제공,
              발표할 안내 PPT를 디자인했습니다. 지원자, 평가자 두 파트로 총
              72페이지의 PPT를 제작했습니다.
            </InfoTxt>
            <InfoList>
              <li>
                학교 상징색과 그 인접색에 명도, 채도 차이를 주어 배색해
                <strong> 통일감있는 컬러</strong> 사용
              </li>
              <li>
                도전하는 학생들의<strong> 역동적이고 활기참</strong>을
                그래픽으로 표현
              </li>
              <li>
                <strong>PPT의 흐름을 한 눈에 이해</strong>하기 좋은 Progress
                Bar와
                <strong> 강조할 부분에는 인덱스 그래픽</strong>을 제작하여 사용
              </li>
            </InfoList>
          </InfoTxtWrap>
          <DetailContTitle>사용된 그래픽</DetailContTitle>
          <ProjectContents detailImg={DetailImg1} detailTxt="컬러 구성" />
          <ProjectContents
            detailImg={DetailImg2}
            detailTxt="활기차고 희망찬 움직임을 표현한 그래픽"
          />
          <ProjectContents
            detailImg={DetailImg3}
            detailTxt="Progress Bar와 인덱스 그래픽"
          />
          <DetailContTitle>완성된 작업 내지</DetailContTitle>
          <ProjectContents detailImg={DetailImg4} />
          <ProjectContents detailImg={DetailImg5} />
          <ProjectContents detailImg={DetailImg6} />
          <ProjectContents detailImg={DetailImg7} />
          <ProjectContents detailImg={DetailImg8} />
        </DetailSection>
      </LayoutWrap>
    </>
  );
};

export default DesignHongikReport;
