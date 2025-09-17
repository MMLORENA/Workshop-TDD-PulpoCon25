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
              <strong>DEBES</strong> escribir un test que falle, antes de escribir nada de código de producción. 
            </li>
            <li className="dot">
              <strong>NO</strong> deberías escribir más códgio de test del necesario para que falle. 
            </li>
            <li className="dot">
              <strong>NO</strong> deberías escribir más código de producción del necesario para hacer que el test pase. 
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};
