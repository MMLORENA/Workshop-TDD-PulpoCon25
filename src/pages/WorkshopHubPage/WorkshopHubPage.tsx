import { NavLink } from "react-router-dom";
import { paths } from "../../config/paths";
import "./WorkshopHubPage.css";

export const WorkshopHubPage = () => {
  return (
    <>
      <h2>Aprende iterativamente la metodología TDD desde 0</h2>
      <nav>
        <ul className="links">
          <li className="dot">
            <NavLink to={paths.demoRules.href} className="link">
            Parte 1 - Aprende las formas y reglas fundamentales de TDD
            </NavLink>
          </li>
          <li className="dot">
            <NavLink to={paths.demoWorkflowTwo.href} className="link">
            Parte 2 - Aprende las formas y reglas fundamentales de TDD
            </NavLink>
          </li>
          <li className="dot">
            <NavLink to={paths.tddStrategiesIntro.href} className="link">
            Dale cuerpo y ritmo a tu desarrollo con estrategias de TDD
            </NavLink>
          </li>
        </ul>
      </nav>
      <h2>Lista de Katas: </h2>
      <nav>
        <ul className="links">
          <li>
            <NavLink to={paths.firstKata.href} className="link">
              Kata 1
            </NavLink>
          </li>
          <li>
            <NavLink to={paths.secondKata.href} className="link">
              Kata 2
            </NavLink>
          </li>
          <li>
            <NavLink to={paths.thirdKata.href} className="link">
              Kata 3
            </NavLink>
          </li>
          <li>
            <NavLink to={paths.fourthKata.href} className="link">
              Kata 4
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
