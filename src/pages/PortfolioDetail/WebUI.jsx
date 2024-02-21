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
import DetailImg1 from "/assets/img/detail_UI_1.png";
import DetailImg2 from "/assets/img/detail_UI_2.png";
import DetailImg3 from "/assets/img/detail_UI_3.png";

const WebUI = () => {
  return (
    <>
      <Helmet>
        <title>UI 챌린지 | 김미경의 포트폴리오 사이트</title>
      </Helmet>
      <LayoutWrap>
        <DetailSection>
          <SectionTitle>
            UI 챌린지
            <OutLink>
              <Link
                to={"https://mixnuts211.github.io/Practice-basic-everyday/"}
                target="_blank"
              >
                <span>Demo Link</span>
              </Link>
              <Link
                to={"https://github.com/mixnuts211/Practice-basic-everyday"}
                target="_blank"
              >
                <span>GitHub Link</span>
              </Link>
            </OutLink>
          </SectionTitle>
          <InfoTxtWrap>
            <InfoTxt>
              Frontend Mentor 사이트의 시안을 활용하여 싱글 메인 페이지의 UI
              제작을 연습하는 개인 프로젝트입니다. 빠르고 정확한 코드 작성을
              연습하기 위해 시작한 프로젝트로, 작업시간과 다시 복기한 핵심
              내용들을 기록해가며 진행했습니다.
            </InfoTxt>
            <InfoList>
              <li>
                <strong>실무와 같은 빠른 코드 작성을 목표</strong>로 하되 웹
                표준을 준수하는 코드 작성
              </li>
              <li>
                VS Code extension인 Waka time을 활용해{" "}
                <strong>작업 소요 시간 기록</strong>
              </li>
              <li>
                새롭게 학습했거나 복기한 내용들은{" "}
                <strong>ReadMe에 작성하여 정리</strong>
              </li>
            </InfoList>
          </InfoTxtWrap>
          <DetailContTitle>프로젝트 작업 내용</DetailContTitle>
          <ProjectContents
            detailImg={DetailImg1}
            detailTxt="작업 페이지와 작업 시간 기록"
          />
          <ProjectContents
            detailImg={DetailImg2}
            detailTxt="복기한 내용들을 텍스트로 정리"
          />
          <ProjectContents
            detailImg={DetailImg3}
            detailTxt="브라우저에서 작업 페이지를 확인할 수 있는 사이트 GitHub로 배포"
          />
        </DetailSection>
      </LayoutWrap>
    </>
  );
};

export default WebUI;
