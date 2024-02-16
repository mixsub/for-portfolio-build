import { Link } from "react-router-dom";
import { Tag } from "../../globalStyle/CommonLayout";
import {
  ContentsCard,
  CardTxtWrap,
  CardImgWrap,
  TxtWrap,
  CardTitle,
  InfoTxt,
  SummaryTxt,
  DateTxt,
  CardTxtList,
} from "./Style";

const ProjectCard = ({
  detailLink,
  projectTitle,
  projectDate,
  projectSummary,
  projectKeypoint,
  projectType,
  projectTools,
  projectContribute,
  projectListImg,
}) => {
  return (
    <ContentsCard>
      <Link to={detailLink}>
        <CardTxtWrap>
          <CardTitle>{projectTitle}</CardTitle>
          <SummaryTxt>{projectSummary}</SummaryTxt>
          <DateTxt>{projectDate}</DateTxt>
          <TxtWrap>
            {projectKeypoint.map((txt, index) => (
              <InfoTxt key={index}>{txt}</InfoTxt>
            ))}
          </TxtWrap>
          <CardTxtList>
            <li>
              <InfoTxt>
                <strong>작업 종류</strong>
              </InfoTxt>
              <InfoTxt>{projectType}</InfoTxt>
            </li>
            <li>
              <InfoTxt>
                <strong>제작</strong>
              </InfoTxt>
              <InfoTxt>
                {projectTools.map((tag, index) => (
                  <Tag key={index}>{tag}</Tag>
                ))}
              </InfoTxt>
            </li>
            <li>
              <InfoTxt>
                <strong>기여도</strong>
              </InfoTxt>
              <InfoTxt>{projectContribute}</InfoTxt>
            </li>
          </CardTxtList>
        </CardTxtWrap>
        <CardImgWrap>
          <img src={projectListImg} alt="" />
        </CardImgWrap>
      </Link>
    </ContentsCard>
  );
};

export default ProjectCard;
