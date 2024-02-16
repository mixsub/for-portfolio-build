import { Link } from "react-router-dom";
import { Tag } from "../../globalStyle/CommonLayout";
import {
  PageTitle,
  SectionWrap,
  SubTitle,
  BlockTxt,
  FlexWrap,
  ImgWrap,
  TxtWrap,
  MainTxtBullet,
  ParagraphTxt,
  ContLabel,
} from "./Style";
import ResumeImg from "/assets/img/resume.png";

const Resume = () => {
  return (
    <>
      <PageTitle>resume 이력서</PageTitle>
      <SectionWrap>
        <FlexWrap>
          <ImgWrap>
            <img src={ResumeImg} alt="김미경 프로필 사진" />
          </ImgWrap>
          <TxtWrap>
            <SubTitle>
              <span>김미경</span>
              <BlockTxt>웹 퍼블리셔, 프론트엔드 지원</BlockTxt>
            </SubTitle>
            <MainTxtBullet>생년월일 : 1994.02.11</MainTxtBullet>
            <MainTxtBullet>이메일 : migyeong0211@gmail.com</MainTxtBullet>
            <MainTxtBullet>
              깃허브 :{" "}
              <Link to="https://github.com/mixnuts211" target="_blank">
                @mixnuts211
              </Link>
            </MainTxtBullet>
          </TxtWrap>
        </FlexWrap>
      </SectionWrap>
      <SectionWrap>
        <SubTitle>자기소개</SubTitle>
        <ParagraphTxt as="p">
          <strong>
            함께했던 구성원들에게 저는 같이 일하고 싶은 동료입니다.
          </strong>
          <br />
          이는 부트캠프 당시 프로젝트를 함께한 팀원분들에게 받은{" "}
          <Link
            to="https://drive.google.com/file/d/1dHhvNzgWz-dQ8ALUcnvJLcrumn3t0cYa/view?usp=sharing"
            target="_blank"
          >
            동료 피드백
          </Link>
          에서 공통으로 저에게 작성해 주신 키워드이며 이전 직장에서도{" "}
          <strong>옆에 있으면 든든하던 동료가 퇴사하여 아쉽다</strong>라는
          이야기를 들었습니다. 이는 현재 상황에 필요한 일, 할 수 있는 일을{" "}
          <strong>
            스스로 찾아 나서며 번거로운 일도 적극적으로 해결하는 저의 성격에서
            받을 수 있었던 피드백
          </strong>
          이라 생각합니다.
        </ParagraphTxt>
        <ParagraphTxt as="p">
          <strong>
            구조적인 CSS와 더 나은 방식의 코드를 작성하기 위해 고민하고
            소통합니다.
          </strong>
          <br />
          부트캠프 팀 프로젝트 진행 당시 제작 중이던 애플리케이션의 UI 작업의
          마무리 단계에서, 페이지 레이아웃의 가장 큰 틀이 의도대로 구현되지 않는
          문제를 뒤늦게 발견했습니다. 이에 새로운 구조로 전체 페이지를 수정하는
          것이 불가피했습니다.{" "}
          <strong>
            이때 저는 자진하여 모든 페이지의 CSS 코드를 검토하고 수정해 보겠다고
            했습니다.
          </strong>{" "}
          작성된 모든 코드를 확인하고{" "}
          <strong>
            수정 전에는 해당 코드를 작성한 분과 함께 코드 리뷰를 진행하며 어떤
            의도로 작성된 코드인지, 더 나은 방향으로 고칠 방법이 무엇이 있는지
            적극적으로 의논한 경험
          </strong>
          이 있습니다. 이렇게 직접 문제를 해결하고자 노력한 결과, 2일이라는 시간
          동안 작성된 전체 CSS 코드를 점검 및 수정할 수 있었고, 계획되어 있던
          다음 기능 구현 일정에 차질 없이 착수할 수 있었습니다.
        </ParagraphTxt>
        <ParagraphTxt as="p">
          <strong>디자인 시스템에 대한 이해도가 높습니다.</strong>
          <br />
          디자인을 전공하고 디자이너로 근무했던 경험이 있어 디자인 시스템에 대한
          이해도가 높습니다. 또 디자이너로서 디자인을 의뢰하는 타 부서 사람들과
          소통하며 정해진 일정 내에 작업물을 제작했던 경험이 있습니다. 이러한
          경험을 활용하여 하나의 웹 사이트를 만들어가는 과정에서 긍정적이고
          원활한 의사소통에 적극 기여하고 싶습니다.
        </ParagraphTxt>
      </SectionWrap>
      <SectionWrap>
        <SubTitle>기술</SubTitle>
        <FlexWrap>
          <ContLabel>Stack</ContLabel>
          <TxtWrap>
            <Tag>HTML</Tag>
            <Tag>CSS</Tag>
            <Tag>JavaScript</Tag>
            <Tag>jQuery</Tag>
            <Tag>React</Tag>
            <Tag>styled-components</Tag>
            <Tag>Git</Tag>
          </TxtWrap>
        </FlexWrap>
        <FlexWrap>
          <ContLabel>Tool</ContLabel>
          <TxtWrap>
            <Tag>GitHub</Tag>
            <Tag>FileZilla</Tag>
            <Tag>Visual Studio Code</Tag>
            <Tag>Discord</Tag>
            <Tag>Slack</Tag>
            <Tag>Notion</Tag>
            <Tag>Figma</Tag>
            <Tag>각종 Adobe 프로그램</Tag>
            <Tag>Mac OS</Tag>
          </TxtWrap>
        </FlexWrap>
      </SectionWrap>
      <SectionWrap>
        <SubTitle>기술 이해도</SubTitle>
        <FlexWrap>
          <ContLabel>HTML Living Standard</ContLabel>
          <TxtWrap>
            <MainTxtBullet>
              시맨틱 태그를 이해하고 있고 웹 표준을 준수하기 위한 규칙들을
              인지하고 있습니다.
            </MainTxtBullet>
            <MainTxtBullet>
              웹 접근성에 대해 어느 정도 이해하고 있으며 논리적인 순서로 마크업
              하기, 스크린리더에 텍스트를 제공하는 기법 등을 고려할 수 있습니다.
              웹 접근성 관련 서적 집필 프로젝트에 참여한 경험이 있습니다.
            </MainTxtBullet>
            <MainTxtBullet>
              role, aria-label, aria-labelledby를 이해하고 있습니다.
            </MainTxtBullet>
            <MainTxtBullet>
              radio 또는 check box를 활용하여 탭 메뉴, 아코디언 메뉴를 제작할 수
              있습니다.
            </MainTxtBullet>
          </TxtWrap>
        </FlexWrap>
        <FlexWrap>
          <ContLabel>CSS</ContLabel>
          <TxtWrap>
            <MainTxtBullet>
              CSS의 명확한 동작원리에 관심이 많습니다. MDN Web Docs를 활용해
              문제를 해결할 수 있으며 initial value를 이해하고 있습니다.
            </MainTxtBullet>
            <MainTxtBullet>
              유연하고 체계적인, 견고한 CSS 작성에 관심이 많으며, SMACSS과 같은
              방법론을 학습하고 적용해보는데에 적극적입니다.
            </MainTxtBullet>
            <MainTxtBullet>
              sr-only와 같은 스크린 리더 기법을 이해하고 있습니다.
            </MainTxtBullet>
            <MainTxtBullet>
              디자인 시스템을 이해하고 공통된 스타일을 묶을 수 있으며, 스타일을
              상속하거나 상황에 따라 특정 클래스를 따로 작성하여 스타일을 관리할
              수 있습니다.
            </MainTxtBullet>
            <MainTxtBullet>
              이미지 스프라이트 방식을 이해하고 있고 사용할 수 있습니다.
            </MainTxtBullet>
            <MainTxtBullet>
              사용자 에이젼시에 대한 개념을 인지하고있으며 reset css 없이
              요소들의 기본 스타일을 정리 할 수 있습니다.
            </MainTxtBullet>
          </TxtWrap>
        </FlexWrap>
        <FlexWrap>
          <ContLabel>JavaScript</ContLabel>
          <TxtWrap>
            <MainTxtBullet>
              자바스크립트 딥다이브, 코어 자바스크립트 서적 수준의 기본적인
              이론을 습득하고 있습니다.
            </MainTxtBullet>
            <MainTxtBullet>
              주어진 API 명세를 활용해 필요한 데이터를 화면에 출력할 수
              있습니다.
            </MainTxtBullet>
            <MainTxtBullet>
              REST API를 이해하고 있으며 CRUD 작업 경험이 있습니다.
            </MainTxtBullet>
            <MainTxtBullet>
              JavaScript 애니메이션에 관심이 있으며 Canvas API, Three.js 라이
              브러리를 학습하고 있습니다.
            </MainTxtBullet>
          </TxtWrap>
        </FlexWrap>
      </SectionWrap>
      <SectionWrap>
        <SubTitle>참여 프로젝트</SubTitle>
        <FlexWrap>
          <ContLabel>
            E-book 집필 <br />
            <Link to="https://ridibooks.com/books/2773000060" target="_blank">
              웹 접근성 왭(why-web)?
            </Link>
          </ContLabel>
          <TxtWrap>
            <MainTxtBullet>총 집필 기간 8주</MainTxtBullet>
            <MainTxtBullet>
              운용의 용이성 - 입력장치 접근성 파트 작성
            </MainTxtBullet>
            <MainTxtBullet>
              매주 토요일 팀원들과 집필 해온 내용 발표 및 피드백 공유
            </MainTxtBullet>
          </TxtWrap>
        </FlexWrap>
        <FlexWrap>
          <ContLabel>
            오픈 소스 제작 기여{" "}
            <Link to="https://sqlschool.co.kr/" target="_blank">
              SQooL
            </Link>
          </ContLabel>
          <TxtWrap>
            <MainTxtBullet>
              디자인 기여 - Figma로 CheetSheet 페이지 제작 (디자인 팀 내
              CheetSheet 팀원 총 3명)
            </MainTxtBullet>
            <MainTxtBullet>
              HTML, CSS 코드 작성 - 웹사이트에서 사용될 공통 컴포넌트인 Header,
              SideBar, Footer 컨테이너 구현, Scroll top 버튼 구현
            </MainTxtBullet>
          </TxtWrap>
        </FlexWrap>
      </SectionWrap>
      <SectionWrap>
        <SubTitle>비개발 업무 경력</SubTitle>
        <FlexWrap>
          <ContLabel>
            2020.03 - 2022.03
            <br /> 홍익대학교 기획처 디자인실
          </ContLabel>
          <TxtWrap>
            <MainTxtBullet>편집디자인</MainTxtBullet>
            <MainTxtBullet>
              모집요강 책자 표지 등 대외용 시각 작업물 제작
            </MainTxtBullet>
            <MainTxtBullet>타 부서의 디자인 의뢰 작업물 제작</MainTxtBullet>
          </TxtWrap>
        </FlexWrap>
        <FlexWrap>
          <ContLabel>
            2018.07 - 2019.07 <br />
            공무원 수험 학원 디자인 및 홈페이지 관리 업무
          </ContLabel>
          <TxtWrap>
            <MainTxtBullet>
              Newin 이러닝 통합 솔루션 NewCampue를 활용한 강의 사이트 디자인 및
              관리
            </MainTxtBullet>
            <MainTxtBullet>강의 자료 및 문제집 편집디자인</MainTxtBullet>
          </TxtWrap>
        </FlexWrap>
      </SectionWrap>
      <SectionWrap>
        <SubTitle>학력 및 수료사항</SubTitle>
        <FlexWrap>
          <ContLabel>2022.08.29 - 2023.01.06</ContLabel>
          <TxtWrap>
            <MainTxtBullet>
              KDT ‘멋쟁이사자처럼 프론트엔드 스쿨’ 수료 - HTML / CSS /
              JavaScript / React
            </MainTxtBullet>
          </TxtWrap>
        </FlexWrap>
        <FlexWrap>
          <ContLabel>2017.03.23 - 2017.09.13</ContLabel>
          <TxtWrap>
            <MainTxtBullet>
              국비 교육 ‘디지털디자인 양성’ 수료 - HTML / CSS / jQuery /
              웹디자인
            </MainTxtBullet>
          </TxtWrap>
        </FlexWrap>
        <FlexWrap>
          <ContLabel>2012.02 - 2016.02</ContLabel>
          <TxtWrap>
            <MainTxtBullet>부경대학교 시각디자인학과 졸업</MainTxtBullet>
            <MainTxtBullet>
              3년간 학과 학생회 기획부 소속 - 각종 행사 기획 및 운영
            </MainTxtBullet>
          </TxtWrap>
        </FlexWrap>
      </SectionWrap>
      <SectionWrap>
        <SubTitle>자격증</SubTitle>
        <FlexWrap>
          <ContLabel>2017.09</ContLabel>
          <TxtWrap>
            <MainTxtBullet>웹디자인 기능사</MainTxtBullet>
          </TxtWrap>
        </FlexWrap>
        <FlexWrap>
          <ContLabel>2017.06</ContLabel>
          <TxtWrap>
            <MainTxtBullet>컴퓨터 그래픽스 운용 기능사</MainTxtBullet>
          </TxtWrap>
        </FlexWrap>
      </SectionWrap>
    </>
  );
};

export default Resume;
