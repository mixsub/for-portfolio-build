import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Index";
import Portfolio from "./pages/Portfolio/Index";
import DesignHongikAssignment from "./pages/PortfolioDetail/DesignHongikAssignment";
import DesignHongikProcess from "./pages/PortfolioDetail/DesignHongikProcess";
import DesignHongikReport from "./pages/PortfolioDetail/DesignHongikReport";
import DesignHongikBanner from "./pages/PortfolioDetail/DesignHongikBanner";
import WebGHMarket from "./pages/PortfolioDetail/WebGHMarket";
import WebTheOne from "./pages/PortfolioDetail/WebTheOne";
import WebSQL from "./pages/PortfolioDetail/WebSQL";
import WebUI from "./pages/PortfolioDetail/WebUI";

import Resume from "./pages/Resume/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "portfolio/detail/1",
        element: <DesignHongikAssignment />,
      },
      {
        path: "portfolio/detail/2",
        element: <DesignHongikProcess />,
      },
      {
        path: "portfolio/detail/3",
        element: <DesignHongikReport />,
      },
      {
        path: "portfolio/detail/4",
        element: <DesignHongikBanner />,
      },
      {
        path: "portfolio/detail/5",
        element: <WebSQL />,
      },
      {
        path: "portfolio/detail/6",
        element: <WebGHMarket />,
      },
      {
        path: "portfolio/detail/7",
        element: <WebUI />,
      },
      {
        path: "portfolio/detail/8",
        element: <WebTheOne />,
      },
      {
        path: "resume",
        element: <Resume />,
      },
    ],
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

export default router;
