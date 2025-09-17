import { NavLink } from "react-router-dom";
import { Navigation } from "../../../components/Navigation/Navigation";
import { paths } from "../../../config/paths";

export const FakeIt = () => {
  return (
    <>
      <Navigation
        backLink={paths.tddStrategiesIntro}
        nextLink={paths.tddStrategiesObvious}
      />
       <NavLink to={paths.demoWorkflowThree.href} className="presentation-link" title={`Ir a ${paths.demoWorkflowThree.text}`}>→</NavLink>
      <section className="section fake-it-section">
        <h2>Estrategias de TDD: Fake it</h2>
        <ul>
          <li className="dot">
            A veces, la implementación más simple es devolver exactamente el
            valor esperado.
          </li>
          <li className="dot">
            Utiliza{" "}
            <strong>
              <i>Fake It</i>
            </strong>{" "}
            cuando sea apropiado: esto suele ser más sencillo que añadir lógica
            condicional.
          </li>
        </ul>
        <h3>Ejemplos de implementaciones mínimas:</h3>
        <ul>
          <li className="dot">
            Para un test que espera <i>Hello, World!</i>, simplemente devuelve
            ese valor:
          </li>
          <li>
            <pre className="code">
              <code>
                {`
function greet(name: string): string {
  return "Hello, World!"; 
  }`}
              </code>
            </pre>
          </li>
          <li className="dot">
            Para un test que espera un 5, simplemente devuelve ese valor:
          </li>
          <li>
            <pre className="code">
              <code>
                {`
function sum(a: number, b: number): number {
  return 5; 
}`}
              </code>
            </pre>
          </li>
          <li className="dot">
            Para un test que espera un 0, simplemente devuelve un string vacío:
          </li>
          <li>
            <pre className="code">
              <code>
                {`
function toRoman(number: number): string {
  return ""; 
}`}
              </code>
            </pre>
          </li>
        </ul>
      </section>
    </>
  );
};
