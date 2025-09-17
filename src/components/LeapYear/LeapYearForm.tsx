import { useState } from "react";
import "./LeapYearForm.css";

function isLeapYear(year: number): boolean {
  if (isNaN(year)) return false;
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

const LeapYearForm = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value.replace(/[^0-9]/g, ""));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const year = parseInt(input, 10);
    if (!input) {
      setResult(null);
      return;
    }
    setResult(isLeapYear(year) ? "¡Es bisiesto!" : "No es bisiesto");
  };

  return (
    <section className="leap-form">
      <form
        className="leap-form__form"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <label htmlFor="leap-year-input" className="leap-form__label">
          Introduce un año:
        </label>
        <div className="leap-form__input-group">
          <input
            id="leap-year-input"
            className="leap-form__input"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={input}
            onChange={handleChange}
            placeholder="Ej: 2024"
            aria-label="Año"
            maxLength={4}
          />
          <button type="submit" className="leap-form__button">
            Comprobar
          </button>
        </div>
      </form>
      <div className="leap-form__result-box">
        <span className="leap-form__resultado-title">Resultado:</span>
        {result && <span className="leap-form__result">{result}</span>}
      </div>
    </section>
  );
};

export default LeapYearForm;
