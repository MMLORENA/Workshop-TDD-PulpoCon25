import { NavLink } from "react-router-dom";
import { paths } from "../../config/paths";
import "./Presentation.css";

export const Presentation = () => {
  return (
    <main className="presentation">
      <header className="presentation-header">
        <h2 className="presentation-subtitle--accent">Aprende iterativamente la metodología TDD desde 0
           <p className="presentation-subtitle">¡Bienvenidos/as al taller 🤩!</p>
        </h2>
      </header>
      <div className="presenters-container">
        <div className="presenter-card">
          <div className="presenter-image">
            <img src="/assets/ben.jpeg" alt="Benjamin Alexander Rae" />
          </div>
          <div className="presenter-info">
            <h3 className="presenter-name">Benjamin Alexander Rae</h3>
            <a 
              href="https://linkedin.com/in/benjamin-alexander-rae" 
              target="_blank" 
              rel="noopener noreferrer"
              className="presenter-link"
            >
              @benjamin-alexander-rae
            </a>
          </div>
        </div>
        <div className="presenter-card">
          <div className="presenter-image">
            <img src="/assets/this.jpeg" alt="Lorena Martinez Moledo" />
          </div>
          <div className="presenter-info">
            <h3 className="presenter-name">Lorena Martínez Moledo</h3>
            <a 
              href="https://linkedin.com/in/lorenamartinezmoledo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="presenter-link"
            >
              @lorenamartinezmoledo
            </a>
          </div>
         
        </div>
        <NavLink to={paths.tddIntroduction.href} className="presentation-link" title={`Ir a ${paths.tddIntroduction.text}`}>→</NavLink>
      </div>
      <footer className="presentation-footer">
        <div className="footer-content">
          <p className="footer-text">
          🔗 Link para clonarse el repositorio de gitHub: 
          </p>
          <a 
            href="#" 
            className="footer-link"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Repositorio del workshop
          </a>
        </div>
      </footer>
    </main>
  );
};
