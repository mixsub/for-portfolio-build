import { Link } from "react-router-dom";
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
  OutLink,
} from "./Style";
import DetailImg1 from "/assets/img/detail_4_1.png";
import DetailImg2 from "/assets/img/detail_4_2.png";
import DetailImg3 from "/assets/img/detail_4_3.png";

const WebGHMarket = () => {
  return (
    <>
      <Helmet>
        <title>풍년마켓 개발 | 김미경의 포트폴리오 사이트</title>
      </Helmet>
      <LayoutWrap>
        <DetailSection>
          <SectionTitle>
            풍년마켓
            <OutLink>
              <Link to={"https://pungnyeon.netlify.app/"} target="_blank">
                <span>Site Link</span>
              </Link>
              <Link
                to={"https://github.com/mixnuts211/Good-Harvest-Market"}
                target="_blank"
              >
                <span>GitHub Link</span>
              </Link>
            </OutLink>
          </SectionTitle>
          <InfoTxtWrap>
            <InfoTxt>
              부트캠프 당시 4인 팀으로 진행한 프로젝트입니다. 소규모로 운영되는
              주말 농장에서 재배된 농작물들을 판매하거나 교환하고 농사와 관련된
              팁들을 공유할 수 있는 농산물 직거래 SNS 플랫폼을 기획해
              제작했습니다.
            </InfoTxt>
            <InfoList>
              <li>
                <strong>시멘틱 태그, ir기법 등</strong>을 활용한 코드와
                Lighthouse 진단을 참고 후 <strong> aria-label</strong> 작성
                등으로 접근성 점수를 최대 100점까지 개선
              </li>
              <li>
                <strong>react-helmet-async</strong>을 사용하여 Document Title과
                meta 태그를 화면별로 설정하고 Lighthouse 검색 엔진 최적화 점수를
                20% 이상 개선
              </li>
              <li>
                @keyframes을 사용한 <strong> Splash 화면 애니메이션</strong>{" "}
                구현
              </li>
              <li>주어진 API 명세에 맞춰 상품, 댓글 CRUD 구현</li>
              <li>
                제공된{" "}
                <strong>
                  피그마의 컴포넌트 디자인 기반으로 GlobalStyle CSS 코드
                </strong>{" "}
                작성 및<strong> 공통 버튼과 모달 컴포넌트 UI</strong> 제작
              </li>
              <li>
                GitHub의 Issues, Milestones, Project를 적극 활용하여 진행 상황
                공유
              </li>
              <li>
                <strong>데일리 스크럼</strong>을 통한 이슈 공유, 코드 리뷰, 페어
                프로그래밍 진행
              </li>
              <li>로고, 캐릭터 디자인</li>
            </InfoList>
          </InfoTxtWrap>
          <DetailContTitle>어플리케이션 내부 모습</DetailContTitle>
          <ProjectContents
            detailImg={DetailImg1}
            detailTxt={"풍년마켓 로고와 캐릭터를 활용한 첫 화면"}
          />
          <ProjectContents
            detailImg={DetailImg2}
            detailTxt={"로그인 후 홈 화면, 프로필 페이지"}
          />
          <ProjectContents
            detailImg={DetailImg3}
            detailTxt={"상품 등록 페이지"}
          />
        </DetailSection>
      </LayoutWrap>
    </>
  );
};

export default WebGHMarket;
