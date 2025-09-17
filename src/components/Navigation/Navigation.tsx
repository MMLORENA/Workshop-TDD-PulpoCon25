import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { Path } from "../../config/paths";

type NavigationFooterProps = {
  backLink: Path;
  nextLink?: Path;
};

export const Navigation = ({ backLink, nextLink }: NavigationFooterProps) => {
  return (
    <nav className="navigation">
      <NavLink to={backLink.href}>{`👈 Volver a ${backLink.text} `}</NavLink>
      {nextLink && (
        <NavLink to={nextLink.href}>{`Ir a ${nextLink.text} 👉`}</NavLink>
      )}
    </nav>
  );
};
