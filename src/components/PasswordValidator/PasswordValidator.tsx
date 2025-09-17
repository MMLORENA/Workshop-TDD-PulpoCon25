
import "./PasswordValidator.css";

export const PasswordValidator = () => {
  const validationRules = [
    "Más de 8 caracteres",
    "Contiene al menos una letra mayúscula",
    "Contiene al menos una letra minúscula",
    "Contiene al menos un número",
    "Contiene al menos un guión bajo (_)"
  ];

  return (
    <div className="password-validator">
      <h2>Password Validator</h2>
      <form className="password-form">
        <div className="form-group">
          <label htmlFor="password-input" className="form-label">
            Contraseña
          </label>
          <div className="input-button-container">
            <input
              id="password-input"
              type="password"
              className="password-input"
            />
            <button type="submit">
              Validar
            </button>
          </div>
        </div>
      </form>
      <div className="validation-rules">
        {validationRules.map((rule, index) => (
          <div key={index} className="validation-rule">
            <span className="validation-icon">❌</span>
            <span className="validation-text">{rule}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
