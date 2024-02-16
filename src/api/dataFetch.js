const fetchData = async () => {
  const res = await fetch("/data/projectData.json");
  const projectData = await res.json();
  return projectData;
};

export default fetchData;
