import { Navigation } from "../../components/Navigation/Navigation";
import { paths } from "../../config/paths";
import "./TddIntroduction.css";

export const TddIntroduction = () => {
  return (
     <>
    <Navigation backLink={paths.workshopHub} nextLink={paths.demoRules} />
    <main>
      <div className="intro-container">
        <header className="intro-header">
          <h2 className="intro-title">Test-Driven Development</h2>
        </header>
        <div className="founders-section">
          <div className="founder-card">
            <div className="founder-image">
              <img src="/assets/kent-beck.webp" alt="Kent Beck - Creador de TDD" />
            </div>
            <div className="founder-info">
              <h3 className="founder-name">Kent Beck</h3>
              <p className="founder-role">Redescubridor de TDD</p>
            </div>
          </div>
          <div className="founder-card">
            <div className="founder-image">
              <img src="/assets/uncle-bob.webp" alt="Uncle Bob - Promotor de TDD" />
            </div>
            <div className="founder-info">
              <h3 className="founder-name">Robert C. Martín</h3>
              <p className="founder-role">Promotor de TDD</p>
            </div>
          </div>
        </div>
        <div className="note">
          <blockquote>
            "TDD es una técnica de diseño, no una técnica de testing"
          </blockquote>
          <cite>— Kent Beck</cite>
        </div>
      </div>
    </main>
  </>
  )
};
