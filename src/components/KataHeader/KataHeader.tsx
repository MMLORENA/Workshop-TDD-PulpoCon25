import "./KataHeader.css";

type KataHeaderProps = {
  kataNumber: number;
  title: string;
  instructionsPath: string;
};

export const KataHeader = ({
  kataNumber,
  title,
  instructionsPath,
}: KataHeaderProps) => {
  return (
    <>
      <header className="header-kata">
        <h2>
          Kata {kataNumber}: {title}
        </h2>
        <span>
          ℹ️ Encontrarás el archivo README dentro de:{" "}
          <span className="italic">📂 src → katas → {instructionsPath}</span>
        </span>
      </header>
      <hr className="divider"></hr>
    </>
  );
};
