import { Navigation } from "../../../components/Navigation/Navigation";
import { paths } from "../../../config/paths";
import { Link } from "react-router-dom";

export const TddStrategiesIntroPage = () => {
  return (
    <>
      {" "}
      <Navigation backLink={paths.changeCode} nextLink={paths.workshopHub} />
      <section className="section">
        <h2>
          Estrategias para conseguir el GREEN{" "}
          <span role="img" aria-label="verde">
            🟢
          </span>{" "}
          en TDD
        </h2>
        <ul>
          <li className="dot">
            <Link to={paths.tddStrategiesFakeIt.href}>Fake-it:</Link>{" "}
            <i>Fake it until you make it</i>
          </li>
          <li className="dot">
            <Link to={paths.tddStrategiesObvious.href}>
              Implementación Obvia
            </Link>
          </li>
          <li className="dot">
            <Link to={paths.tddStrategiesTriangulation.href}>
              Triangulación:
            </Link>{" "}
            elige tu siguiente caso de test que te va a obligar a cambiar el
            código de producción.
          </li>
        </ul>
        <p className="note">
          Recuerda aplicar <strong>SIEMPRE</strong> BABY STEPS 🚼
        </p>
      </section>
    </>
  );
};
