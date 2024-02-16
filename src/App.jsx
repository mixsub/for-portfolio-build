import { Outlet, useLocation, Navigate } from "react-router-dom";
import { GlobalStyle } from "./globalStyle/GlobalStyle";
import { PageWrap, MainWrap, LayoutWrap } from "./globalStyle/CommonLayout";
import Header from "./components/common/Header/Index";
import Footer from "./components/common/Footer/Index";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const { pathname } = useLocation();

  if (pathname === "/") {
    return <Navigate to="/home" />;
  } else {
    return (
      <>
        <ScrollToTop />
        <GlobalStyle />
        <PageWrap>
          <Header />
          <MainWrap>
            <LayoutWrap>
              <Outlet />
            </LayoutWrap>
          </MainWrap>
          <Footer />
        </PageWrap>
      </>
    );
  }
};
export default App;
