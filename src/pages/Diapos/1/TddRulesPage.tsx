import { NavLink } from "react-router-dom";
import { Navigation } from "../../../components/Navigation/Navigation";
import { paths } from "../../../config/paths";

export const TddRulesPage = () => {
  return (
    <>
     <NavLink to={paths.tddIntroduction.href} className="presentation-link" title={`Ir a ${paths.tddIntroduction.text}`}>→</NavLink>
      <Navigation backLink={paths.workshopHub} nextLink={paths.demoCycle} />
      <main>
        <section className="section">
          <h2>Las 3 reglas fundamentales de TDD</h2>
          <ul>
            <li className="dot">
              <strong>NUNCA</strong> escribas código de producción sin tener un
              test que falle.
            </li>
            <li className="dot">
              <strong>SIEMPRE</strong> verificar que el test falla por la razón
              que esperas.
            </li>
            <li className="dot">
              <strong>SOLO</strong> puedes refactorizar el código cuando todos
              los tests están pasando.
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};
