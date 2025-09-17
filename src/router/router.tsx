import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../components/App/App";
import { WorkshopHubPage } from "../pages/WorkshopHubPage/WorkshopHubPage";
import { paths } from "../config/paths";
import { FirstKataPage } from "../pages/FirstKataPage/FirstKataPage";
import { SecondKataPage } from "../pages/SecondKataPage/SecondKataPage";
import { ThirdKataPage } from "../pages/ThirdKataPage/ThirdKataPage";
import { TddRulesPage } from "../pages/Diapos/1/TddRulesPage";
import { TddCyclePage } from "../pages/Diapos/2/TddCyclePage";
import { TddWorkFlowPageOne } from "../pages/Diapos/3/TddWorkFlowPageOne";
import { TddWorkFlowPageTwo } from "../pages/Diapos/4/TddWorkFlowPageTwo";
import { TddWorkFlowPageThree } from "../pages/Diapos/5/TddWorkFlowPageThree";
import { TddWorkFlowPageFour } from "../pages/Diapos/6/TddWorkFlowPageFour";
import { TddChangeCode } from "../pages/Diapos/7/TddChangeCode";
import { TddStrategiesIntroPage } from "../pages/Diapos/8/TddStrategiesIntroPage";
import { FakeIt } from "../pages/Diapos/9/FakeIt";
import { Obvious } from "../pages/Diapos/10/Obvious";
import { Triangulation } from "../pages/Diapos/11/Triangulation";
import { Presentation } from "../pages/Presentation/Presentation";
import { TddIntroduction } from "../pages/TddIntroduction/TddIntroduction";
import { FourthKataPage } from "../pages/FourthKataPage/FourthKataPage";

const routes: RouteObject[] = [
  {
    path: paths.root.href,
    element: <App />,
    children: [
      {
        index: true,
        element: <Presentation />,
      },
      {
        path: paths.tddIntroduction.href,
        element: <TddIntroduction />,
      },
      {
        path: paths.workshopHub.href,
        element: <WorkshopHubPage />,
      },
      {
        path: paths.firstKata.href,
        element: <FirstKataPage />,
      },
      {
        path: paths.secondKata.href,
        element: <SecondKataPage />,
      },
      {
        path: paths.thirdKata.href,
        element: <ThirdKataPage />,
      },
      {
        path: paths.fourthKata.href,
        element: <FourthKataPage />,
      },
      {
        path: paths.demoRules.href,
        element: <TddRulesPage />,
      },
      {
        path: paths.demoCycle.href,
        element: <TddCyclePage />,
      },
      {
        path: paths.demoWorkflowOne.href,
        element: <TddWorkFlowPageOne />,
      },
      {
        path: paths.demoWorkflowTwo.href,
        element: <TddWorkFlowPageTwo />,
      },
      {
        path: paths.demoWorkflowThree.href,
        element: <TddWorkFlowPageThree />,
      },
      {
        path: paths.demoWorkflowFour.href,
        element: <TddWorkFlowPageFour />,
      },
      {
        path: paths.changeCode.href,
        element: <TddChangeCode />,
      },
      {
        path: paths.tddStrategiesIntro.href,
        element: <TddStrategiesIntroPage />,
      },
      {
        path: paths.tddStrategiesFakeIt.href,
        element: <FakeIt />,
      },
      {
        path: paths.tddStrategiesObvious.href,
        element: <Obvious />,
      },
      {
        path: paths.tddStrategiesTriangulation.href,
        element: <Triangulation />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
