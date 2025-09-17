import { Outlet } from "react-router-dom";
import "./App.css";
import { Header } from "../Header/Header";
import { Decoration } from "../Decoration/Decoration";

export const App = () => {
  return (
    <div className="main-container">
      <Header />
      <div className="main-content">
        <Outlet />
      </div>
      <Decoration />
    </div>
  );
};

export default App;
