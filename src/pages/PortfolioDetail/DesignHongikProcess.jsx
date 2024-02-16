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
import DetailImg1 from "/assets/img/detail_2_1.png";
import DetailImg2 from "/assets/img/detail_2_2.png";
import DetailImg3 from "/assets/img/detail_2_3.png";
import DetailImg4 from "/assets/img/detail_2_4.png";
import DetailImg5 from "/assets/img/detail_2_5.png";
import DetailImg6 from "/assets/img/detail_2_6.png";

const DesignHongikProcess = () => {
  return (
    <LayoutWrap>
      <DetailSection>
        <SectionTitle>
          홍익대학교
          <br />
          입학전형 주요사항
        </SectionTitle>
        <InfoTxtWrap>
          <InfoTxt>
            홍익대학교의 22-23학년도 입학 전형 주요사항 표지를 제작했습니다.
            연도마다 3개의 시안을 제작하여 전달했습니다.
          </InfoTxt>
          <InfoList>
            <li>해당 연도를 강조할 수 있도록 숫자를 활용하여 그래픽 제작</li>
            <li>컬러는 학교 상징색과 그 인접색을 활용</li>
          </InfoList>
        </InfoTxtWrap>
        <DetailContTitle>22학년도</DetailContTitle>
        <ProjectContents detailImg={DetailImg1} detailTxt="시안1" />
        <ProjectContents detailImg={DetailImg2} detailTxt="시안2" />
        <ProjectContents detailImg={DetailImg3} detailTxt="시안3 (최종 선정)" />
        <DetailContTitle>23학년도</DetailContTitle>
        <ProjectContents detailImg={DetailImg4} detailTxt="시안1" />
        <ProjectContents detailImg={DetailImg5} detailTxt="시안2" />
        <ProjectContents detailImg={DetailImg6} detailTxt="시안3 (최종 선정)" />
      </DetailSection>
    </LayoutWrap>
  );
};

export default DesignHongikProcess;
