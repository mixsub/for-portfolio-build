import { Link } from "react-router-dom";
import ProjectContents from "../../components/ProjectContents/Index";
import {
  LayoutWrap,
  DetailSection,
  SectionTitle,
  DetailContTitle,
  InfoTxtWrap,
  InfoTxt,
  InfoList,
  OutLink,
} from "./Style";
import DetailImg1 from "/assets/img/detail_5_1.png";
import DetailImg2 from "/assets/img/detail_5_2.png";
import DetailImg3 from "/assets/img/detail_5_3.png";

const WebTheOne = () => {
  return (
    <LayoutWrap>
      <DetailSection>
        <SectionTitle>
          더원인더스트리 <br />
          기업 소개 사이트 퍼블리싱
          <OutLink>
            <Link to={"https://theoneindus.com/"} target="_blank">
              <span>Site Link</span>
            </Link>
          </OutLink>
        </SectionTitle>
        <InfoTxtWrap>
          <InfoTxt>
            주식회사 더원인더스트리의 기업 소개 사이트를 퍼블리싱 했습니다.
            더원인더스트리는 땅을 파지 않고 노후된 상하수도 관로를 보수,
            복원하는 새로운 기술을 선보이는 기업으로, 각종 특허와 개발 중인
            하수관로 로봇 제품들의 소개, 시공 사례들과 기사 등의 내용으로 회사를
            소개하고 있습니다.
          </InfoTxt>
          <InfoList>
            <li>
              SEO를 위한 <strong> 웹 표준 준수 마크업</strong>과 페이지 별
              <strong> Document Title, meta 태그 및 오픈그래프 설정</strong>으로
              구글 검색 시 상위 2번째 노출
            </li>
            <li>
              <strong>sr-only 기법</strong>을 활용한
              <strong> 웹 접근성 준수 코드</strong> 작성
            </li>
            <li>
              <strong>이미지 컴프레셔</strong>를 활용한 이미지 최적화로
              <strong>
                Lighthouse 성능 점수를 70점대에서 최대 97점까지 개선
              </strong>
            </li>
            <li>
              <strong>디자이너와 피그마로 협업</strong>하여 진행
            </li>
            <li>
              전달받은 데스크탑 디자인을 기반으로
              <strong> 반응형 화면 직접 구성</strong>
            </li>
          </InfoList>
        </InfoTxtWrap>
        <DetailContTitle>어플리케이션 내부 모습</DetailContTitle>
        <ProjectContents
          detailImg={DetailImg1}
          detailTxt={"데스크탑 홈 화면"}
        />
        <ProjectContents
          detailImg={DetailImg2}
          detailTxt={"데스크탑 상세페이지"}
        />
        <ProjectContents detailImg={DetailImg3} detailTxt={"모바일 화면"} />
      </DetailSection>
    </LayoutWrap>
  );
};

export default WebTheOne;
