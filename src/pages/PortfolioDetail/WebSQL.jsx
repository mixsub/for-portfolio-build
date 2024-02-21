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
import DetailImg1 from "/assets/img/detail_SQL_1.png";
import DetailImg2 from "/assets/img/detail_SQL_2.png";

const WebSQL = () => {
  return (
    <>
      <Helmet>
        <title>SQooL 오픈소스 디자인 개발 | 김미경의 포트폴리오 사이트</title>
      </Helmet>
      <LayoutWrap>
        <DetailSection>
          <SectionTitle>
            Web SQL 튜토리얼 사이트
            <br />
            SQooL
            <OutLink>
              <Link to={"https://sqlschool.co.kr"} target="_blank">
                <span>Site Link</span>
              </Link>
              <Link
                to={
                  "https://www.figma.com/file/AwM5vZXHQmeRsAWfixZDdn/sqool-백업?type=design&node-id=1-5149&mode=design&t=9uQkVJx90LmiO0Ab-0"
                }
                target="_blank"
              >
                <span>Figma Link</span>
              </Link>
            </OutLink>
          </SectionTitle>
          <InfoTxtWrap>
            <InfoTxt>
              Web SQL 학습용 튜토리얼 사이트 SQool 오픈소스 제작 프로젝트에
              참여해 디자인과 UI 파트에서 작업을 진행했습니다. 해당
              포트폴리오에서는 스스로 기여한 내용에 대해서만 작성하였습니다.
            </InfoTxt>
            <InfoList>
              <li>
                Figma로 CheetSheet 페이지 제작 (디자인 팀 내 CheetSheet 팀원 총
                3명)
              </li>
              <li>
                웹사이트에서 사용될 <strong>공통 컴포넌트</strong>인 Header,
                SideBar, Footer 컨테이너 구현,{" "}
                <strong>flex-grow를 활용해 유연한 컨테이너 제작</strong>
              </li>
              <li>CSS calc()함수를 활용해 Scroll top 버튼 구현</li>
            </InfoList>
          </InfoTxtWrap>
          <DetailContTitle>디자인된 화면</DetailContTitle>
          <ProjectContents
            detailImg={DetailImg1}
            detailTxt="CheetSheet 페이지"
          />
          <ProjectContents detailImg={DetailImg2} detailTxt="다크모드 버전" />
        </DetailSection>
      </LayoutWrap>
    </>
  );
};

export default WebSQL;
