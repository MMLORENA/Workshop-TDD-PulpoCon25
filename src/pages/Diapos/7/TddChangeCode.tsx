import { Navigation } from "../../../components/Navigation/Navigation";
import { paths } from "../../../config/paths";
import "./TddChangeCode.css";

export const TddChangeCode = () => {
  return (
    <>
      <Navigation
        backLink={paths.demoWorkflowFour}
        nextLink={paths.workshopHub}
      />
      <section className="section">
        <h2>¿Qué partes de código puedo tocar en cada fase?: </h2>
        <table className="tdd-change-table">
          <thead>
            <tr>
              <th className="tdd-change-table__header"></th>
              <th className="tdd-change-table__header">
                <span role="img" aria-label="rojo">
                  🔴
                </span>{" "}
                RED
              </th>
              <th className="tdd-change-table__header">
                <span role="img" aria-label="verde">
                  🟢
                </span>{" "}
                GREEN
              </th>
              <th className="tdd-change-table__header">
                <span role="img" aria-label="azul">
                  🔵
                </span>{" "}
                REFACTOR
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="tdd-change-table__row-header">
                Código de test
              </th>
              <td className="tdd-change-table__cell">✅</td>
              <td className="tdd-change-table__cell">❌</td>
              <td className="tdd-change-table__cell">✅</td>
            </tr>
            <tr>
              <th scope="row" className="tdd-change-table__row-header">
                Código de producción
              </th>
              <td className="tdd-change-table__cell">?️</td>
              <td className="tdd-change-table__cell">✅</td>
              <td className="tdd-change-table__cell">✅</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};
