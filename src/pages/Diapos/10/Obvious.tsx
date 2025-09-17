import { Navigation } from "../../../components/Navigation/Navigation";
import { paths } from "../../../config/paths";

export const Obvious = () => {
  return (
    <>
      <Navigation
        backLink={paths.tddStrategiesFakeIt}
        nextLink={paths.tddStrategiesTriangulation}
      />
      <section className="section fake-it-section">
        <h2>Estrategias de TDD: Implementación Obvia</h2>
        <ul>
          <li className="dot">Escribir la implementación directamente.</li>
        </ul>
        <p className="note">
          ⚠️ Es la estrategía más peligrosa porque nos puede llevar a cometer
          errores fácilmente y hacer el código más complejo.
        </p>
      </section>
    </>
  );
};
