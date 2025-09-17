import { Navigation } from "../../../components/Navigation/Navigation";
import { paths } from "../../../config/paths";

export const Triangulation = () => {
  return (
    <>
      <Navigation
        backLink={paths.tddStrategiesObvious}
        nextLink={paths.thirdKata}
      />
      <section className="section fake-it-section">
        <h2>Estrategias de TDD: Triangulación</h2>
        <p>
          Práctica de elegir el siguiente caso de test que te obligue a cambiar
          el código de producción, alejándote de implementaciones <i>Fake it</i>{" "}
          hacia soluciones más generales.
        </p>
        <h3>Cómo elegir el siguiente caso de test</h3>
        <ul>
          <li className="dot">
            Selecciona un test que falle con la implementación actual.
          </li>
          <li className="dot">
            Elige el test más simple que requiera un comportamiento diferente.
          </li>
          <li className="dot">
            Evita tests que pasarían con la solución <i>Fake it</i> actual.
          </li>
          <li className="dot">
            Usa la triangulación para guiar la implementación hacia la
            generalidad.
          </li>
        </ul>
        <h3>
          ¿Cuándo eliminar el <i>Method not implemented</i>?
        </h3>
        <ul>
          <li className="dot">
            Elimina el error <i>throw</i> una vez tengas una implementación
            funcional para el caso de test actual.
          </li>
          <li className="dot">
            El siguiente test debe fallar porque requiere un comportamiento
            diferente, no por el error lanzado.
          </li>
        </ul>
        <p className="note">
          Esto asegura que usas la triangulación para guiar el diseño.
        </p>
      </section>
    </>
  );
};
