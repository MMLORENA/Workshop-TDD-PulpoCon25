import { Navigation } from "../../../components/Navigation/Navigation";
import { paths } from "../../../config/paths";

export const TddWorkFlowPageFour = () => {
  return (
    <>
      <Navigation
        backLink={paths.demoWorkflowThree}
        nextLink={paths.changeCode}
      />
      <section className="section">
        <h2>El workflow de TDD: </h2>
        <h3>
          4.Fase REFACTOR{" "}
          <span role="img" aria-label="azul">
            🔵
          </span>
        </h3>
        <p>Está fase no siempre es obligatoria:</p>
        <ul>
          <li className="dot">
            Limpia el código para mejorar la legibilidad y mantenibilidad.
          </li>
          <li className="dot">
            Refactoriza tanto el código de producción como el de test.
          </li>
          <li className="dot">
            <strong>NUNCA</strong> añadas nueva funcionalidad durante el
            refactor.
          </li>
          <li className="dot">
            <strong>NUNCA</strong> cambies el comportamiento externo.
          </li>
          <li className="dot">
            Elimina duplicidad, mejora nombres de variables, simplifica
            expresiones.
          </li>
          <li className="dot">
            Ejecuta los tests frecuentemente durante el refactor.
          </li>
          <li className="dot">
            Si los tests fallan, revierte y prueba pasos más pequeños.
          </li>
        </ul>
      </section>
    </>
  );
};
