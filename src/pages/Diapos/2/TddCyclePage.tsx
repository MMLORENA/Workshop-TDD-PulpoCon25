import { Navigation } from "../../../components/Navigation/Navigation";
import { paths } from "../../../config/paths";
import "./TddCyclePage.css";

export const TddCyclePage = () => {
  return (
    <>
      <Navigation backLink={paths.demoRules} nextLink={paths.demoWorkflowOne} />
      <main>
        <section className="section">
          <h2>El Ciclo TDD</h2>
          <main>
            <div className="tdd-cycle-diagram">
              <article className="tdd-cycle-diagram__step tdd-cycle-diagram__step--red">
                <span role="img" aria-label="rojo">
                  🔴
                </span>
                <h3 className="tdd-cycle-diagram__title">RED</h3>
                <p className="tdd-cycle-diagram__desc">
                  Escribe un test que falle
                </p>
              </article>
              <div
                className="tdd-cycle-diagram__arrow tdd-cycle-diagram__arrow--down"
                aria-hidden="true"
              ></div>
              <article className="tdd-cycle-diagram__step tdd-cycle-diagram__step--green">
                <span role="img" aria-label="verde">
                  🟢
                </span>
                <h3 className="tdd-cycle-diagram__title">GREEN</h3>
                <p className="tdd-cycle-diagram__desc">
                  Escribe el mínimo código para pasar
                </p>
              </article>
              <div className="tdd-cycle-diagram__bifurcation">
                <div className="tdd-cycle-diagram__branch">
                  <div
                    className="tdd-cycle-diagram__arrow tdd-cycle-diagram__arrow--down"
                    aria-hidden="true"
                  ></div>
                  <article className="tdd-cycle-diagram__step tdd-cycle-diagram__step--repeat">
                    <h3 className="tdd-cycle-diagram__title">Repetir</h3>
                    <p className="tdd-cycle-diagram__desc">
                      Vuelve a escribir un test que falle
                    </p>
                    <span role="img" aria-label="rojo">
                      🔴
                    </span>
                  </article>
                </div>
                <div className="tdd-cycle-diagram__branch">
                  <div
                    className="tdd-cycle-diagram__arrow tdd-cycle-diagram__arrow--down"
                    aria-hidden="true"
                  ></div>
                  <article className="tdd-cycle-diagram__step tdd-cycle-diagram__step--refactor">
                    <span role="img" aria-label="azul">
                      🔵
                    </span>
                    <h3 className="tdd-cycle-diagram__title">REFACTOR</h3>
                    <p className="tdd-cycle-diagram__desc">
                      Mejora el código manteniendo los tests en verde
                    </p>
                    <div
                      className="tdd-cycle-diagram__arrow tdd-cycle-diagram__arrow--down"
                      aria-hidden="true"
                    ></div>
                    <article className="tdd-cycle-diagram__step tdd-cycle-diagram__step--repeat">
                      <h3 className="tdd-cycle-diagram__title">Repetir</h3>
                      <p className="tdd-cycle-diagram__desc">
                        Vuelve a escribir un test que falle
                      </p>
                      <span role="img" aria-label="rojo">
                        🔴
                      </span>
                    </article>
                  </article>
                </div>
              </div>
            </div>
          </main>
        </section>
      </main>
    </>
  );
};
