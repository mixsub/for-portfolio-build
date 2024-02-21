import { useEffect, useRef, useState } from "react";
import fetchData from "../../api/dataFetch";
import { Helmet } from "react-helmet-async";
import ProjectCard from "../../components/ProjectCard/Index";
import {
  PageTitle,
  BlockTxt,
  SectionWrap,
  SROnlyTxt,
  BtnList,
  GreenBtn,
  YellowBtn,
  RedBtn,
  ContentsWrap,
  ContentsList,
} from "./Style";

const Portfolio = () => {
  const [originData, setOriginData] = useState([]);
  const [dataList, setDataList] = useState([]);
  const contentsWrapRef = useRef(null);

  useEffect(() => {
    const getData = async () => {
      const res = await fetchData();
      setOriginData(res.projects);
      setDataList(res.projects);
    };
    getData();
  }, []);

  const toggleHandler = (e) => {
    const webArr = originData.filter((list) => list.category.includes("web"));
    const designArr = originData.filter((list) =>
      list.category.includes("design")
    );
    const totalArr = originData;
    if (e.target.innerText === "전체") {
      setDataList([...totalArr]);
      contentsWrapRef.current.setAttribute("data-category", "total");
    } else if (e.target.innerText === "웹") {
      setDataList([...webArr]);
      contentsWrapRef.current.setAttribute("data-category", "web");
    } else if (e.target.innerText === "디자인") {
      setDataList([...designArr]);
      contentsWrapRef.current.setAttribute("data-category", "design");
    }
  };

  return (
    <>
      <Helmet>
        <title>포트폴리오 | 김미경의 포트폴리오 사이트</title>
      </Helmet>
      <PageTitle>
        <BlockTxt>portfolio</BlockTxt>
        <BlockTxt>포트폴리오</BlockTxt>
      </PageTitle>
      <SectionWrap>
        <SROnlyTxt>프로젝트 목록</SROnlyTxt>
        <BtnList>
          <li>
            <GreenBtn onClick={toggleHandler}>전체</GreenBtn>
          </li>
          <li>
            <YellowBtn onClick={toggleHandler}>웹</YellowBtn>
          </li>
          <li>
            <RedBtn onClick={toggleHandler}>디자인</RedBtn>
          </li>
        </BtnList>
        <ContentsWrap data-category="total" ref={contentsWrapRef}>
          <ContentsList>
            {dataList.map((data) => (
              <ProjectCard
                key={data.id}
                detailLink={`/portfolio/detail/${data.id}`}
                projectTitle={data.title}
                projectDate={data.date}
                projectSummary={data.summary}
                projectKeypoint={data.keyPoint}
                projectType={data.type}
                projectTools={data.tools}
                projectContribute={data.contribute}
                projectListImg={data.thumbnail}
              />
            ))}
          </ContentsList>
        </ContentsWrap>
      </SectionWrap>
    </>
  );
};

export default Portfolio;
