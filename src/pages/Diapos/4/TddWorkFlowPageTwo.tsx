import { Navigation } from "../../../components/Navigation/Navigation";
import { paths } from "../../../config/paths";

export const TddWorkFlowPageTwo = () => {
  return (
    <>
      <Navigation
        backLink={paths.demoWorkflowOne}
        nextLink={paths.demoWorkflowThree}
      />
      <section className="section">
        <h2>El workflow de TDD: </h2>
        <h3>
          2. Fase RED{" "}
          <span role="img" aria-label="rojo">
            🔴
          </span>{" "}
        </h3>
        <p>Empieza a escribir un test que falle:</p>
        <ul>
          <li className="dot">
            Escribe el mínimo código de test para que falle.
          </li>
          <li className="dot">
           Describe los tests de manera que expliquen el comportamiento esperado.
          </li>
          <li className="dot">
            Si el test pasa inesperadamente, investiga la causa.
          </li>
          <li className="dot">
            <strong>CRÍTICO:</strong> Ejecuta el test y verifica que falla por
            la razón que esperas:
            <p className="less-space">
              - El test debe fallar porque la funcionalidad aún no está
              implementada.
            </p>
            <p className="less-space">
              - No debe fallar por errores de compilación, imports faltantes,
              errores de referencia o errores tipográficos.
            </p>
          </li>
        </ul>
      </section>
    </>
  );
};
