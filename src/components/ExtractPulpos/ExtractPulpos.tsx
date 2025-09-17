import { useState } from "react";
import "./ExtractPulpos.css";

export const useExtractPulpos = (text: string): string => {
  return (text.match(/🐙/g) || []).join("");
};

const ExtractPulpos = () => {
  const [input, setInput] = useState("");
  const [pulpos, setPulpos] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPulpos(useExtractPulpos(input));
  };

  return (
    <section className="extract-pulpos">
      <header>
        <h2 className="extract-pulpos__title">Extrae Pulpos</h2>
      </header>
      <form className="extract-pulpos__form" onSubmit={handleSubmit}>
        <label htmlFor="pulpo-input" className="extract-pulpos__label">
          Escribe un texto con emojis de pulpos:
        </label>
        <input
          id="pulpo-input"
          className="extract-pulpos__input"
          type="text"
          value={input}
          onChange={handleChange}
          aria-label="Texto con pulpos"
        />
        <button type="submit" className="extract-pulpos__button">
          Extraer
        </button>
      </form>
      <section className="extract-pulpos__resultado">
        <p className="extract-pulpos__resultado-title">Resultado:</p>
        {pulpos && <span className="extract-pulpos__pulpos">{pulpos}</span>}
      </section>
    </section>
  );
};

export default ExtractPulpos;
