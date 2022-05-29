import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

export default function Login() {
  let navigate = useNavigate();

  const logo = require("../../assets/Logo.png");
  const handleLogin = () => {
    navigate("home");
  };
  return (
    <div className="main">
      <div className="container">
        <div className="head">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="form">
          <h1>Inicia sesión</h1>
          <input type={"text"} placeholder="Usuario"></input>
          <input type={"password"} placeholder="Contraseña"></input>
          <button onClick={handleLogin}>Ingresar</button>
        </div>
      </div>
    </div>
  );
}
