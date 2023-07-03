import { NavLink } from "react-router-dom";

import { homeRoute, historyRoute } from "../../routes";

import "./Header.scss";


export function Header() {
  return (
    <header>
      <h1 className="heading">QR & Bar Code Generator</h1>

      <nav>
        <NavLink to={homeRoute.path}>home</NavLink>  
        <NavLink to={historyRoute.path}>history</NavLink>
      </nav>
    </header>
  );
}
