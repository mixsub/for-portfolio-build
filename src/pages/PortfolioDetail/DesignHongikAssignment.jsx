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
import DetailImg1 from "/assets/img/detail_1_1.png";
import DetailImg2 from "/assets/img/detail_1_2.png";
import DetailImg3 from "/assets/img/detail_1_3.png";
import DetailImg4 from "/assets/img/detail_1_4.png";
import DetailImg5 from "/assets/img/detail_1_5.png";
import DetailImg6 from "/assets/img/detail_1_6.png";

const DesignHongikAssignment = () => {
  return (
    <>
      <Helmet>
        <title>신입생 모집요강 디자인 | 김미경의 포트폴리오 사이트</title>
      </Helmet>
      <LayoutWrap>
        <DetailSection>
          <SectionTitle>
            홍익대학교
            <br />
            신입생 모집요강
          </SectionTitle>
          <InfoTxtWrap>
            <InfoTxt>
              홍익대학교의 21-22학년도 모집요강 표지 그래픽 작업을 진행했습니다.
              교내 건물과 캠퍼스 주변 전경을 아이콘으로 제작하여 그래픽을
              구성했고, 고등학생들이 접하게 될 매체임을 고려하여 딱딱한 느낌보다
              부드럽고 귀여운 이미지로 제작을 진행했습니다.
            </InfoTxt>
            <InfoList>
              <li>
                <strong>홍익대학교의 아이덴티티</strong>를 표현할 수 있는
                와우산, 교내 조형물 등을 적극 활용하여 아이콘 제작
              </li>
              <li>
                인쇄소와 직접 연락하여
                <strong> 은박과 엠보싱을 활용한 후가공</strong> 처리
              </li>
              <li>
                모집요강 전형에 따라 정해진 메인 컬러가 있 음을 고려하여
                <strong> 변화되는 다양한 컬러에 모두 어울릴 수 있도록</strong>
                전체 톤을 맞춰 제작
              </li>
            </InfoList>
          </InfoTxtWrap>
          <DetailContTitle>21학년도</DetailContTitle>
          <ProjectContents
            detailImg={DetailImg1}
            detailTxt="위에서부터 순서대로 교내 건물, 교내 구조물, 캠퍼스 주변 환경 관련 아이콘"
          />
          <ProjectContents
            detailImg={DetailImg2}
            detailTxt="실제 캠퍼스 건물 위치와 주변 환경을 동일하게 그래픽으로 구현하고 조합"
          />
          <ProjectContents detailImg={DetailImg3} detailTxt="최종 작업물" />
          <DetailContTitle>22학년도</DetailContTitle>
          <ProjectContents
            detailImg={DetailImg4}
            detailTxt="교내 건물을 나타내는 아이콘을 입체적인 형태로 재구성"
          />
          <ProjectContents
            detailImg={DetailImg5}
            detailTxt="HONGIK 글자와 함께 재배치하여 캠퍼스의 모습을 구현"
          />
          <ProjectContents detailImg={DetailImg6} detailTxt="최종 작업물" />
        </DetailSection>
      </LayoutWrap>
    </>
  );
};

export default DesignHongikAssignment;
