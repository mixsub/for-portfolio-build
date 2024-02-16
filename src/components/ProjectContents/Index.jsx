import { styled } from "styled-components";
import { SmallTxt } from "../../globalStyle/CommonLayout";

const ProjectContents = ({ detailImg, detailTxt }) => {
  return (
    <DetailCont>
      <DetailImgCont>
        <img src={detailImg} alt="" />
      </DetailImgCont>
      <DetailTxt>{detailTxt}</DetailTxt>
    </DetailCont>
  );
};

export default ProjectContents;

const DetailCont = styled.div`
  margin-bottom: 4rem;
`;

const DetailImgCont = styled.div`
  width: 100%;
  min-height: 8rem;
  margin-bottom: 1.2rem;
  background-color: ${(props) => props.theme.lightGrey};
`;

const DetailTxt = styled.span`
  ${SmallTxt}
  margin-bottom: 4rem;
  line-height: 1.4;
`;
