import { Navigation } from "../../../components/Navigation/Navigation";
import { paths } from "../../../config/paths";

export const TddWorkFlowPageOne = () => {
  return (
    <>
      <Navigation backLink={paths.demoCycle} nextLink={paths.firstKata} />
      <section className="section">
        <h2>El workflow de TDD: </h2>
        <h3>
          1. Planificación de los tests (Antes de la fase RED{" "}
          <span role="img" aria-label="rojo">
            🔴
          </span>
          )
        </h3>
        <p>Antes de escribir código:</p>
        <ul>
          <li className="dot">Haz una lista completa de casos de test.</li>
          <li className="dot">
            Incluye funcionalidad básica, casos excepcionales y casos de error.
          </li>
          <li className="dot">Prioriza de lo simple a lo complejo.</li>
          <li className="dot">
            Documenta los casos de test en formato checklist.
          </li>
        </ul>
      </section>
    </>
  );
};
