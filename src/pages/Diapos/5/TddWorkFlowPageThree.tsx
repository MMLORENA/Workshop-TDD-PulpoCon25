import { Link } from "react-router-dom";
import { Navigation } from "../../../components/Navigation/Navigation";
import { paths } from "../../../config/paths";

export const TddWorkFlowPageThree = () => {
  return (
    <>
      <Navigation
        backLink={paths.demoWorkflowTwo}
        nextLink={paths.demoWorkflowFour}
      />
      <section className="section">
        <h2>El workflow de TDD: </h2>
        <h3>
          3. Fase GREEN{" "}
          <span role="img" aria-label="verde">
            🟢
          </span>
        </h3>
        <p>Mejorar el código:</p>
        <ul>
          <li className="dot">
            Escribe el mínimo código para que el test pase.{" "}
            <Link to={paths.tddStrategiesFakeIt.href}>Estrategía fake it</Link>
          </li>
          <li className="dot">Usa la implementación más simple posible. <strong>BABY STEPS</strong></li>
          <li className="dot">
            No te preocupes por la calidad del código en esta fase.
          </li>
          <li className="dot">
            No escribas código de producción que no esté cubierto por tests
          </li>
          <li className="dot">
            Verifica que el test pase y que no se rompa ningún otro test.
          </li>
        </ul>
      </section>
    </>
  );
};
