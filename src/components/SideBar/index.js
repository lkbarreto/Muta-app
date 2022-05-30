import * as React from "react";
import "./index.css";

export default function SideBar() {
  const logo = require("../../assets/Logo.png");
  return (
    <div className="mainSide">
      <div className="topSide">
        <img src={logo} alt="logo"></img>
        <div className="menuSide">
          <a > Usuarios</a>
          <a >Recolecciones</a>
          <a >Entradas ACU</a>
          <a >Configurar</a>
          <a >Ayuda</a>
        </div>
      </div>
      <div className="bottomSide">
        <div className="userChip">
        <img src={require("../../assets/Ellipse.png")} alt="logo"></img>
        <span>Sebastian Ferreira</span>
        </div>
      </div>
    </div>
  );
}
